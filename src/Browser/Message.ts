import Storage from './Storage'

import {Hash, encryptData, decryptData} from '../Lib/Crypt'
import {ENUM_STATUS} from '../Lib/Enum'
import {makeid} from '../Lib/Func'

interface iOnCallbackFunction {
	method: string | null
	param: any
	sendResult: (result: ENUM_STATUS, msg: any, data: any) => any
}
interface iPortCallbackFunction {
	port: chrome.runtime.Port
	method: string | null
	param: any
	sendResult: (result: ENUM_STATUS, msg: any, resData: any) => any
}

type onCallbackFunction = (data: iOnCallbackFunction & {oriParam: any; sender: chrome.runtime.MessageSender}) => void
type portCallbackFunction = (data: iPortCallbackFunction & {oriParam: any}) => void

export interface iMessage {
	setTimeout(ms: number)

	getPort(id: string): chrome.runtime.Port | null

	send(method: string | number, param?: any, isEncrypt?: boolean): Promise<any>
	sendPort(id: string, method: string, param?: any, isEncrypt?: boolean, response?: Function | null): void
	sendTabs(tabId: number, method: string, param?: any, isEncrypt?: boolean): Promise<any>

	on(callback: onCallbackFunction, extId?: string): object | null
	onPort(id: string, callback: portCallbackFunction): void
}

export class message implements iMessage {
	static instance: message

	private portMap: {[key: string]: any}
	private __id__: number
	private __timeout__: number

	private runtime: typeof chrome.runtime | null
	private tabs: typeof chrome.tabs | null

	constructor() {
		if (!message.instance) {
			this.__id__ = 0

			this.portMap = {}
			this.runtime = chrome.runtime || null
			this.tabs = chrome.tabs || null

			message.instance = this
		}

		return message.instance
	}

	/**
	 * Encrypt data
	 * @param {any} param data
	 *
	 * @returns {object|null}
	 */
	private async encryptValue(id: string | number, param: any): Promise<any> {
		let cryptKey = Hash('sha256', Math.random() + Date.now())
		try {
			await Storage.save(`cryptMsg:${id}`, cryptKey)
		} catch (err) {
			throw err
		}

		let enData: {[key: string]: any} = {}
		enData.isEncrypt = true
		for (let [k, v] of Object.entries(param)) {
			let encrypt = true,
				val = v
			if (typeof v === 'object' || Array.isArray(v)) {
				v = JSON.stringify(v)
			} else if (typeof v === 'boolean') {
				encrypt = false
				val = v
			}

			if (encrypt) {
				val = encryptData(v as string, cryptKey)
			}
			enData[k] = val
		}

		return enData
	}

	/**
	 * Decyprt encrypt data
	 * @param {any} data encryptData
	 *
	 * @returns {object|null}
	 */
	private async decryptValue(id: string | number, data: any): Promise<any> {
		let cryptKey: string | null = null
		try {
			cryptKey = await Storage.loadRemove(`cryptMsg:${id}`)
		} catch (err) {
			throw err
		}

		if (!cryptKey) {
			throw new Error('BrowserExt: Not found port cryptMSg')
		}

		let deData = {}
		for (let [k, v] of Object.entries(data)) {
			if (typeof v === 'object' || Array.isArray(v)) {
				v = JSON.stringify(v)
			}

			try {
				let val = decryptData(v as string, cryptKey)
				try {
					deData[k] = JSON.parse(val)
				} catch (err) {
					deData[k] = val
				}
			} catch (err) {
				deData[k] = v
			}
		}

		return deData || null
	}

	setTimeout(ms: number): message {
		this.__timeout__ = ms

		return this
	}

	/**
	 * Chrome runtime Event 발생
	 * @param {String} type 타입
	 * @param {*} param  Parameter
	 * @param {Boolean} isEncrypt Parameters 암호화 여부
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
					data = await this.encryptValue(_id, param)
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
							data = await this.decryptValue(_id || 0, _data)
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
	 *
	 * @param id
	 */
	getPort(id: string): chrome.runtime.Port | null {
		if (this.portMap[id]) {
			return this.portMap[id]
		}

		return null
	}

	/**
	 *
	 * @param id
	 * @param method
	 * @param param
	 * @param isEncrypt
	 * @param response
	 */
	async sendPort(id: string, method: string, param: any = {}, isEncrypt: boolean = false, response: Function | null = null) {
		let port: chrome.runtime.Port | null = null

		if (this.portMap[id]) {
			port = this.portMap[id]
		} else if (this.runtime) {
			port = this.runtime.connect({name: id})
			this.portMap[id] = port
			const removeFunction = () => {
				let port = this.portMap[id]
				delete this.portMap[id]
				port.onDisconnect.removeListener(removeFunction)
			}
			port.onDisconnect.addListener(removeFunction)
		}

		if (!port) {
			console.warn(`BrowserExt: Not found connect port name "${id}"`)
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
				data = await this.encryptValue(_id, param)
			}

			if (response != null) {
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
						response(res)
					}
				}
				
				port.onMessage.addListener(resultCallback)
				setTimeout(() => {
					if (!port) {
						return
					}

					port.onMessage.removeListener(resultCallback)
				}, this.__timeout__)
			}

			port.postMessage({
				__id__: _id,
				id: id,
				type: method,
				param: data,
			})
		} catch (err) {
			throw err
		}
	}

	onPort(id: string, callback: portCallbackFunction) {
		if (!this.runtime) {
			console.warn('BrowserExt: Not found browser API.')
			return
		}

		const onPortFunction = (sendPort: chrome.runtime.Port) => {
			if (id != '*' && sendPort.name != id) {
				return true
			}

			sendPort.onDisconnect.addListener(() => {
				this.portMap[id] = null
			})

			let oldId: number = -1
			sendPort.onMessage.addListener((args: any, res: chrome.runtime.Port) => {
				let _id: number | null = args.__id__ || null
				let _type: string | null = args.type || null
				let _data: any = args.param || {}

				if (_id != null) {
					if (_id > 1000000000 || _id - oldId < 0) {
						oldId = 0
					} else if (oldId > 0 && oldId >= _id) {
						return
					} else {
						oldId = _id
					}
				}

				const sendResult = (result: ENUM_STATUS = ENUM_STATUS.SUCCESS, msg: any = null, resData: any = null) => {
					if (res && res.postMessage) {
						let resultData = {
							name: name,
							type: _type,
							action: data.action || 'UNKNWON',
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
				if (_data.isEncrypt === true) {
					const encryptDataCallback = async () => {
						try {
							data = await this.decryptValue(_id || 0, _data)
						} catch (err) {
							throw err
						}

						callback({
							port: sendPort,
							App,
							Store,
							type: _type,
							oriParam: args,
							param: data,
							sendResult,
						})
					}

					encryptDataCallback()
				} else {
					callback({
						port: sendPort,
						App,
						Store,
						type: _type,
						oriParam: args,
						param: data,
						sendResult,
					})
				}

				return true
			})
		}

		this.runtime.onConnect.addListener(onPortFunction)

		return {
			removeListener: () => {
				this.runtime?.onConnect.removeListener(onPortFunction)
			},
		}
	}

	/**
	 * Chrome tabs Event 발생
	 * @param {String} type 타입
	 * @param {*} param  Parameter
	 * @param {Boolean} isEncrypt Parameters 암호화 여부
	 */
	async sendTabs(tabId: number, type: string, param: any = {}, isEncrypt: boolean = false): Promise<any> {
		return new Promise(async (resolve, reject) => {
			if (!this.tabs) {
				return reject()
			}

			try {
				let _id: string = 's:' + Math.round(Math.random() * 1000000)
				let data = param
				if (isEncrypt) {
					data = await this.encryptValue(_id, param)
				}

				this.tabs.sendMessage(
					tabId,
					{
						__id__: _id,
						__type__: type,
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
}

export default new message()
