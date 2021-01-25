import { ENUM_STATUS } from '../Lib/Enum'
import { makeid, encryptValue, decryptValue } from '../Lib/Func'

interface iOnCallbackFunction {
	method: string | null
	param: any
	sendResult: (result: ENUM_STATUS, msg: any, data: any) => any
}

type onCallbackFunction = (data: iOnCallbackFunction & { oriParam: any; sender: chrome.runtime.MessageSender }) => void

interface iMessage {
	send(method: string, param?: any, isEncrypt?: boolean): Promise<any>
	sendTab(tabId: number, method: string, param?: any, isEncrypt?: boolean): Promise<any>

	on(callback: onCallbackFunction, extId?: string): object | null
	onExternal(callback: onCallbackFunction, extId?: string): object | null
}

export class Message implements iMessage {
	static instance: Message

	private runtime: typeof chrome.runtime | null
	private tabs: typeof chrome.tabs | null

	constructor() {
		if (!Message.instance) {
			this.runtime = chrome.runtime || null
			this.tabs = chrome.tabs || null

			Message.instance = this
		}

		return Message.instance
	}

	/**
	 * 확장 / 앱 또는 다른 확장 / 앱 내의 이벤트 리스너에 단일 메시지를 보냅니다.
	 *
	 * 확장 프로그램은이 방법을 사용하여 콘텐츠 스크립트에 메시지를 보낼 수 없습니다.
	 *
	 * @param method
	 * @param param
	 * @param isEncrypt Parameters 암호화 여부
	 */
	send(method: string, param: any = {}, isEncrypt: boolean = false): Promise<any> {
		return new Promise(async (resolve, reject) => {
			if (!this.runtime) {
				return reject()
			}

			try {
				let _id: string = `s:${method}${makeid(6)}`
				let data = param
				if (isEncrypt) {
					data = await encryptValue(_id, param)
				}

				this.runtime.sendMessage(
					{
						__id__: _id,
						method: method,
						param: data,
					},
					res => {
						if (res && res.result && res.result != 'SUCCESS') {
							return reject(res)
						}
						resolve(res)
					},
				)
			} catch (err) {
				reject(err)
			}
		})
	}

	/**
	 * 응답이 다시 전송 될 때 실행할 선택적 콜백과 함께 지정된 탭의 콘텐츠 스크립트에 단일 메시지를 보냅니다.
	 *
	 * 해당 이벤트는 runtime.onMessage 및 해당 Class의 on 함수로 처리할 수 있습니다.
	 *
	 * @param tabId 발신 Tab ID
	 * @param method
	 * @param param
	 * @param isEncrypt Parameters 암호화 여부
	 */
	async sendTab(tabId: number, method: string, param: any = {}, isEncrypt: boolean = false): Promise<any> {
		return new Promise(async (resolve, reject) => {
			if (!this.tabs) {
				return reject()
			}

			try {
				let _id: string = `s:${method}${makeid(6)}`
				let data = param
				if (isEncrypt) {
					data = await encryptValue(_id, param)
				}

				this.tabs.sendMessage(
					tabId,
					{
						__id__: _id,
						method: method,
						param: data,
					},
					res => {
						if (res && res.result != 'SUCCESS') {
							return reject(res)
						}
						resolve(res)
					},
				)
			} catch (err) {
				reject(err)
			}
		})
	}

	/**
	 * 확장 프로세스 (by sendMessage) 또는 콘텐츠 스크립트 (by tabs.sendMessage) 에서 메시지가 전송되면 이벤트가 발생합니다.
	 *
	 * @param callback On 이벤트 함수, 반드시 sendResult를 호출해야됩니다.
	 * @param extId 특정 app extension id를 입력시 해당 id와 매치된 메세지만 callback을 실행합니다.
	 */
	on(callback: onCallbackFunction, extId: string = ''): object | null {
		if (!this.runtime) {
			console.warn('BrowserExt: Not found browser API.')
			return null
		} else if (extId.length < 1) {
			extId = this.runtime.id
		}

		const onEventFunction = (req: any, sender: chrome.runtime.MessageSender, res: (response?: any) => void) => {
			let _id: string | null = req.__id__ || null
			let _method: string | null = req.method || null
			let _data: any = req.param || {}

			if (extId && sender.id != extId) {
				return true
			}

			try {
				const sendResult = (result: ENUM_STATUS, msg: any = null, resData: any = null) => {
					return res({
						result: result,
						msg: msg,
						data: resData,
					})
				}

				let data = _data
				if (_data.isEncrypt === true) {
					const encryptDataCallback = async () => {
						try {
							data = await decryptValue(_id || 0, _data)
						} catch (err) {
							throw err
						}

						callback({
							method: _method,
							sender: sender,
							oriParam: req,
							param: data,
							sendResult,
						})
					}

					encryptDataCallback()
				} else {
					callback({
						method: _method,
						sender: sender,
						oriParam: req,
						param: data,
						sendResult,
					})
				}
			} catch (err) {
				//
			}

			return true
		}

		this.runtime.onMessage.addListener(onEventFunction)

		return {
			removeListener: () => {
				this.runtime?.onMessage.removeListener(onEventFunction)
			},
		}
	}

	/**
	 * 다른 확장 프로그램 / 앱에서 메시지가 전송되면 시작됩니다 ( sendMessage). 콘텐츠 스크립트에서 사용할 수 없습니다.
	 *
	 * @param callback On 이벤트 함수, 반드시 sendResult를 호출해야됩니다.
	 * @param extId 특정 app extension id를 입력시 해당 id와 매치된 메세지만 callback을 실행합니다.
	 */
	onExternal(callback: onCallbackFunction, extId: string = ''): object | null {
		if (!this.runtime) {
			console.warn('BrowserExt: Not found browser API.')
			return null
		} else if (extId.length < 1) {
			extId = this.runtime.id
		}

		const onEventFunction = (req: any, sender: chrome.runtime.MessageSender, res: (response?: any) => void) => {
			let _id: string | null = req.__id__ || null
			let _method: string | null = req.method || null
			let _data: any = req.param || {}

			if (extId && sender.id != extId) {
				return true
			}

			try {
				const sendResult = (result: ENUM_STATUS, msg: any = null, resData: any = null) => {
					return res({
						result: result,
						msg: msg,
						data: resData,
					})
				}

				let data = _data
				if (_data.isEncrypt === true) {
					const encryptDataCallback = async () => {
						try {
							data = await decryptValue(_id || 0, _data)
						} catch (err) {
							throw err
						}

						callback({
							method: _method,
							sender: sender,
							oriParam: req,
							param: data,
							sendResult,
						})
					}

					encryptDataCallback()
				} else {
					callback({
						method: _method,
						sender: sender,
						oriParam: req,
						param: data,
						sendResult,
					})
				}
			} catch (err) {
				//
			}

			return true
		}

		this.runtime.onMessageExternal.addListener(onEventFunction)

		return {
			removeListener: () => {
				this.runtime?.onMessageExternal.removeListener(onEventFunction)
			},
		}
	}
}

export default new Message()