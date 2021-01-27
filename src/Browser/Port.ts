import {ENUM_STATUS} from '../Lib/Enum'
import {encryptValue, decryptValue} from '../Lib/Func'

interface iPortCallbackFunction {
	port: chrome.runtime.Port
	method: string | null
	param: any
	sendResult: (result: ENUM_STATUS, msg: any, resData: any) => any
}

type portCallbackFunction = (data: iPortCallbackFunction & {oriParam: any}) => void

interface iPort {
	setTimeout(ms: number)

	connect(name: string): chrome.runtime.Port | null
	disConnect(name: string): Boolean
	onDisconnect(name: string, callback: (port: chrome.runtime.Port) => void)

	send(name: string, method: string, param?: any, isEncrypt?: boolean, response?: Function | null): void
	on(name: string, callback: portCallbackFunction): void
}

export class Port implements iPort {
	private portMap: {[key: string]: any}
	private __id__: number
	private __timeout__: number

	private runtime: typeof chrome.runtime | null

	constructor() {
		this.__id__ = 0
		this.__timeout__ = 240000

		this.portMap = {}
		this.runtime = chrome.runtime || null
	}

	/**
	 * Port 사용시 Resoponse를 위한 Timeout 설정
	 *
	 * 기본적으로 Port는 단방향으로만 메세지를 발생합니다.
	 *
	 * 하지만, 해당 Class는 Response를 구현하였으므로 결과값을 받기 위해 기본 Timeout 시간을 설정할 수 있습니다.
	 *
	 * @default 240000ms (4min)
	 *
	 * @param ms milliseconds
	 */
	setTimeout(ms: number = 240000): Port {
		this.__timeout__ = ms

		return this
	}

	/**
	 * 지정된 이름으로 포트를 연결합니다.
	 *
	 * @param name 지정된 포트 이름
	 */
	connect(name: string): chrome.runtime.Port | null {
		if (!this.runtime) {
			console.warn('BrowserExt: Not found browser API.')
			return null
		} else if (this.portMap[name]) {
			return this.portMap[name]
		}

		let port: chrome.runtime.Port | null = this.runtime.connect({name: name})
		this.portMap[name] = port
		const removeFunction = () => {
			let port = this.portMap[name]
			delete this.portMap[name]
			port.onDisconnect.removeListener(removeFunction)
		}
		port.onDisconnect.addListener(removeFunction)

		return port
	}

	/**
	 * 연결되어 있는 포트를 닫습니다.
	 *
	 * @param name 지정된 포트 이름
	 */
	disConnect(name: string): Boolean {
		if (!this.runtime) {
			console.warn('BrowserExt: Not found browser API.')
			return false
		} else if (this.portMap[name]) {
			let port: chrome.runtime.Port | null = this.portMap[name] || null
			if (port) {
				port.disconnect()
			}
		}

		return true
	}

	/**
	 * 지정된 포트가 닫혔을때 이벤트가 발생합니다.
	 *
	 * @param name 지정된 포트 이름
	 * @param callback 포트가 닫힐 때 발생되는 Callback 함수
	 */
	onDisconnect(name: string, callback: (port: chrome.runtime.Port) => void): Port {
		if (!this.runtime) {
			console.warn('BrowserExt: Not found browser API.')
			return this
		} else if (!this.portMap[name]) {
			return this
		}

		let port: chrome.runtime.Port | null = this.portMap[name]
		if (!port) {
			return this
		}

		port.onDisconnect.addListener(callback)

		return this
	}

	/**
	 * 지정된 포트로 메세지를 발송합니다.
	 *
	 * @param name 지정된 포트 이름
	 * @param method 발생시킬 메소드 명
	 * @param param
	 * @param isEncrypt 암호화 여부
	 * @param response Response를 받아야할 경우 Timeout 시간 만큼 기다립니다.
	 */
	async send(name: string, method: string, param: any = {}, isEncrypt: boolean = false, response: Function | null = null) {
		let port: chrome.runtime.Port | null = this.connect(name)

		if (!port) {
			console.warn(`BrowserExt: Not found connect port name "${name}"`)
			return
		}

		try {
			this.__id__++
			if (this.__id__ > 1000000000) {
				this.__id__ = 1
			}

			let _id: number = this.__id__
			let data: any = param
			if (isEncrypt) {
				data = await encryptValue(_id, param)
			}

			if (response != null) {
				let isResponse = false
				const resultCallback = function (res: any) {
					if (!port) {
						return
					} else if (!res.name || res.name != name) {
						return
					} else if (!res.__id__ || res.__id__ != _id) {
						return
					} else if (res.method != method) {
						return
					}

					port.onMessage.removeListener(resultCallback)

					if (response != null) {
						isResponse = true
						response(res)
					}
				}

				port.onMessage.addListener(resultCallback)
				setTimeout(() => {
					if (!port) {
						return
					}

					if (!isResponse) {
						response({
							__id__: _id,
							name: name,
							method: method,
							result: ENUM_STATUS.ERROR,
							msg: 'Return failure due to timeout',
							data: null,
						})
					}
					port.onMessage.removeListener(resultCallback)
				}, this.__timeout__)
			}

			port.postMessage({
				__id__: _id,
				name: name,
				method: method,
				param: data,
			})
		} catch (err) {
			throw err
		}
	}

	/**
	 * 이 이벤트는 포트의 다른 쪽 끝에서 postMessage 를 호출 하면 시작됩니다.
	 *
	 * 첫 번째 매개 변수는 메시지이고 두 번째 매개 변수는 메시지를 수신 한 포트입니다.
	 *
	 * @param name 지정된 포트 이름
	 * @param callback 메세지를 받았을 때 발생되는 Callback 함수
	 */
	on(name: string, callback: portCallbackFunction) {
		if (!this.runtime) {
			console.warn('BrowserExt: Not found browser API.')
			return null
		} else if (name.length < 1) {
			name = '*'
		}

//		let oldId: number = -1
		const onPortFunction = (args: any, res: chrome.runtime.Port) => {
			let _id: number | null = args.__id__ || null
			let _method: string | null = args.method || null
			let _data: any = args.param
/*
			if (_id != null) {
				if (_id > 1000000000 || _id - oldId < 0) {
					oldId = 0
				} else if (oldId > 0 && oldId >= _id) {
					return
				} else {
					oldId = _id
				}
			}
*/
			const sendResult = (result: ENUM_STATUS = ENUM_STATUS.SUCCESS, msg: any = null, resData: any = null) => {
				if (res && res.postMessage) {
					let resultData = {
						name: name,
						method: _method,
						result: result,
						msg: msg,
						data: resData,
					}
					if (_id != null) {
						resultData['__id__'] = _id
					}

					res.postMessage(resultData)
				}
			}

			let data = _data
			if (typeof _data === 'object' && _data.isEncrypt === true) {
				const encryptDataCallback = async () => {
					try {
						data = await decryptValue(_id || 0, _data)
					} catch (err) {
						throw err
					}

					callback({
						port: res,
						method: _method,
						oriParam: args,
						param: data,
						sendResult,
					})
				}

				encryptDataCallback()
			} else {
				callback({
					port: res,
					method: _method,
					oriParam: args,
					param: data,
					sendResult,
				})
			}

			return true
		}

		const onConnectFunction = (sendPort: chrome.runtime.Port) => {
			if (name != '*' && sendPort.name != name) {
				return true
			}

			sendPort.onDisconnect.addListener(() => {
				sendPort.onMessage.removeListener(onPortFunction)
				this.portMap[name] = null
			})

			sendPort.onMessage.addListener(onPortFunction)
		}

		this.runtime.onConnect.addListener(onConnectFunction)

		return {
			removeListener: () => {
				this.runtime?.onConnect.removeListener(onConnectFunction)
			},
		}
	}
}

export default new Port()
