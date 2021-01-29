import {ENUM_STATUS} from '../Lib/Enum'
import {EventEmitter} from 'events'

interface iEventData {
	name: string
	method: string
	data: any
	event: WindowEventHandlers
	sendResult: (data: any) => void | null
}

interface iResonse {
	__id__: string | number,
	name: string,
	method: string,
	status: string | symbol | EMIT_TYPE,
	msg?: any,
	data?: any,
}

enum EMIT_TYPE {
	LOAD = 'load',
	MESSAGE = 'message',
	REMOVE = 'remove',
}

interface iWindowMsgEvent {
	shouldWindow(): boolean
	on(event: string | symbol | EMIT_TYPE, listener: (data: iEventData, ...args: any[]) => void)
	setTimeout(ms: number)
	send(method: string, param?: any, response?: ((data: iResonse) => void) | null): void
}

export class windowMsg extends EventEmitter implements iWindowMsgEvent, EventEmitter {
	private isRun: boolean
	private replay: number

	private __id__: number
	private __timeout__: number

	private name: string
	private recvName: string

	/**
	 * @param name 발신자 명
	 * @param recvName 수신자 명
	 */
	constructor(name: string, recvName: string) {
		super()

		this.__id__ = 0
		this.__timeout__ = 360000

		this.isRun = false
		this.replay = 0
		this.name = name
		this.recvName = recvName || name
	}

	/**
	 * Determines if the provider should be injected
	 *
	 * @returns {boolean} {@code true} Whether the provider should be injected
	 */
	shouldWindow() {
		return this.doctypeCheck() && this.suffixCheck() && this.documentElementCheck()
	}

	/**
	 * Checks the doctype of the current document if it exists
	 *
	 * @returns {boolean} {@code true} if the doctype is html or if none exists
	 */
	private doctypeCheck() {
		const {doctype} = window.document
		if (doctype) {
			return doctype.name === 'html'
		}
		return true
	}

	/**
	 * Returns whether or not the extension (suffix) of the current document is prohibited
	 *
	 * This checks {@code window.location.pathname} against a set of file extensions
	 * that we should not inject the provider into. This check is indifferent of
	 * query parameters in the location.
	 *
	 * @returns {boolean} whether or not the extension of the current document is prohibited
	 */
	private suffixCheck() {
		const prohibitedTypes = [/\.xml$/u, /\.pdf$/u]
		const currentUrl = window.location.pathname
		for (let i = 0; i < prohibitedTypes.length; i++) {
			if (prohibitedTypes[i].test(currentUrl)) {
				return false
			}
		}
		return true
	}

	/**
	 * Checks the documentElement of the current document
	 *
	 * @returns {boolean} {@code true} if the documentElement is an html node or if none exists
	 */
	private documentElementCheck() {
		const documentElement = document.documentElement.nodeName
		if (documentElement) {
			return documentElement.toLowerCase() === 'html'
		}
		return true
	}

	/**
	 * 초기 Init Event 설정
	 */
	async setupEvent() {
		if (this.isRun) {
			return
		} else if (!this.shouldWindow) {
			this.replay++
			setTimeout(() => {
				if (this.replay > 10) {
					console.warn('Metawallet: Not found window.')
					return
				}
				this.setupEvent()
			}, 1000)

			return
		}

		this.isRun = true

		const loadMessage = e => {
			this.emit('load', {name: this.name, data: null, event: e})
		}

		const actionMessage = args => {
			let _data: any = args.data || {}
			if (_data.name != this.name) {
				return
			}

			let _id: number | null = _data.__id__ || null
			let _method: string | null = _data.method || null
			const sendResult = (method: string, data: any) => {
				window.postMessage(
					{
						__id__: _id,
						name: this.recvName,
						method: method,
						data: data || null,
					},
					args.origin || window.origin || '*',
				)
			}

			this.emit('message', {
				name: this.name,
				method: _method,
				data: _data.data,
				event: args,
				sendResult: sendResult,
			})
		}

		window.addEventListener('load', loadMessage)
		window.addEventListener('message', actionMessage)
		window.addEventListener('unload', e => {
			window.removeEventListener('load', loadMessage)
			window.removeEventListener('message', actionMessage)

			this.emit('remove', {name: this.name, data: null, event: e})
		})
	}

	/**
	 * PostMessage Resoponse를 위한 Timeout 설정
	 *
	 * 기본적으로 단방향으로만 메세지를 발생합니다.
	 *
	 * 하지만, 해당 Class는 Response를 구현하였으므로 결과값을 받기 위해 기본 Timeout 시간을 설정할 수 있습니다.
	 *
	 * @default 360000ms (6min)
	 *
	 * @param ms milliseconds
	 */
	setTimeout(ms: number = 360000): windowMsg {
		this.__timeout__ = ms

		return this
	}

	/**
	 * Window Post message 발송
	 *
	 * @param method 전달할 임의의 메소드
	 * @param param 전달할 임의의 데이터
	 * @param response Response를 받아야할 경우 Timeout 시간 만큼 기다립니다.
	 */
	send(method: string, param: any = {}, response: ((data: iResonse) => void) | null): void {
		if (!this.isRun || !this.shouldWindow) {
			throw new Error('DappSDK: Wait for connect.')
		}
		this.__id__++
		if (this.__id__ > 1000000000) {
			this.__id__ = 1
		}

		let _id: number = this.__id__
		let origin = window.origin || '*'

		try {
			if (response != null) {
				let isResponse = false
				const resultCallback = (res: any) => {
					if (res.origin != origin) {
						return
					}

					let _data: any = res.data || {}
					if (_data.name != this.recvName) {
						return
					} else if (!_data.__id__) {
						return
					} else if (_data.__id__ != _id) {
						return
					} else if (_data.method != method) {
						return
					}

					window.removeEventListener('message', resultCallback)

					if (response != null) {
						isResponse = true
						response({
							__id__: _id,
							name: this.name,
							method: method,
							status: ENUM_STATUS.SUCCESS,
							msg: null,
							data: param || null,
						})
					}
				}

				window.addEventListener('message', resultCallback)
				setTimeout(() => {
					if (!isResponse) {
						window.removeEventListener('message', resultCallback)
					}

					response({
						__id__: _id,
						name: this.name,
						method: method,
						status: ENUM_STATUS.ERROR,
						msg: 'Connection timed out.',
						data: null,
					})
				}, this.__timeout__)
			}

			window.postMessage(
				{
					__id__: _id,
					name: this.recvName,
					method: method,
					data: param,
				},
				origin,
			)
		} catch (err) {
			throw err
		}
	}
}

export default (name: string, recvName: string): windowMsg => {
	const winMsg: windowMsg = new windowMsg(name, recvName)
	winMsg.setMaxListeners(100)
	winMsg.setupEvent()

	return winMsg
}
