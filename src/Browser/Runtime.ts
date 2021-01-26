type eventFunction = ({key: string, data: any}) => void

interface iRuntime {
	onInstalled(callback: eventFunction, key: string): void
	removeInstalled(key: string): void
	onConnect(callback: eventFunction, key: string): void
	removeConnect(key: string): void
	onConnectExternal(callback: eventFunction, key: string): void
	removeConnectExternal(key: string): void
	onCommand(callback: eventFunction, key: string): void
	removeCommand(key: string): void
}

export class Runtime implements iRuntime {
	private runtime: typeof chrome.runtime | null
	private commands: typeof chrome.commands | null
	private eventsFlagMap: {[key: string]: boolean}
	private eventsMap: {[key: string]: {[key: string]: Function}}

	constructor() {
		this.eventsFlagMap = {}
		this.eventsMap = {}
		this.runtime = chrome.runtime || null
		this.commands = chrome.commands || null
	}

	/**
	 * Event listener function
	 *
	 * @param {string} evtKey Event type key
	 * @param {any} details Chrome event listener items
	 */
	private eventFunction(evtKey: string, details: any) {
		let eventList = this.eventsMap[evtKey] || {}
		if (Object.keys(eventList).length > 0) {
			for (let [key, cb] of Object.entries(eventList)) {
				cb({key, data: details})
			}
		}
	}

	/**
	 * Event listener remove
	 *
	 * @param {string} evtKey Event type key
	 * @param {string} key Event detail key
	 *
	 * @returns {number} remain event count < 1
	 */
	private removeEventFunction(evtKey: string, key: string) {
		if (!this.eventsFlagMap[evtKey]) {
			return
		} else if (!this.eventsMap[evtKey][key]) {
			return
		}

		if (key == '*') {
			delete this.eventsMap[evtKey]
			this.eventsMap[evtKey] = {}
		} else {
			delete this.eventsMap[evtKey][key]
		}

		return Object.keys(this.eventsMap[evtKey]).length < 1
	}

	/**
	 * Chrome.runtime
	 * Fired when the extension is first installed, when the extension is updated to a new version, and when Chrome is updated to a new version.
	 *
	 * @param {String} key Event identify name
	 * @param {eventFunction} callback callback function
	 */
	onInstalled(callback: eventFunction, key: string = 'init') {
		if (!this.runtime) {
			return console.warn('BrowserExt: Not support chrome.runtime')
		}

		let evtKey = 'installed'
		if (!this.eventsFlagMap[evtKey]) {
			this.eventsMap[evtKey] = {}
			this.runtime.onInstalled.addListener(details => this.eventFunction(evtKey, details))

			this.eventsFlagMap[evtKey] = true
		}

		this.eventsMap[evtKey][key] = callback
	}

	/**
	 * Remove onInstalled event
	 * If the key is *, all events are deleted.
	 *
	 * @param {String} key Event identify name
	 */
	removeInstalled(key: string) {
		if (!this.runtime) {
			return
		}

		let evtKey = 'installed'
		let remainCount = this.removeEventFunction(evtKey, key)
		if (!remainCount) {
			this.runtime.onInstalled.removeListener(details => this.eventFunction(evtKey, details))
			this.eventsFlagMap[evtKey] = false
		}
	}

	/**
	 * Chrome.runtime
	 * Fired when a connection is made from either an extension process or a content script
	 *
	 * @param {String} key Event identify name
	 * @param {eventFunction} callback callback function
	 */
	onConnect(callback: Function, key: string = 'init') {
		if (!this.runtime) {
			return
		}

		let evtKey = 'connect'
		if (!this.eventsFlagMap[evtKey]) {
			this.eventsMap[evtKey] = {}
			this.runtime.onConnect.addListener(port => this.eventFunction(evtKey, port))

			this.eventsFlagMap[evtKey] = true
		}

		this.eventsMap[evtKey][key] = callback
	}

	/**
	 * Remove onConnect event
	 * If the key is *, all events are deleted.
	 *
	 * @param {String} key Event identify name
	 */
	removeConnect(key: string) {
		if (!this.runtime) {
			return
		}

		let evtKey = 'connect'
		let remainCount = this.removeEventFunction(evtKey, key)
		if (!remainCount) {
			this.runtime.onConnect.removeListener(port => this.eventFunction(evtKey, port))
			this.eventsFlagMap[evtKey] = false
		}
	}

	/**
	 * Chrome.runtime
	 * Fired when a connection is made from another extension
	 *
	 * @param {String} key Event identify name
	 * @param {eventFunction} callback callback function
	 */
	onConnectExternal(callback: eventFunction, key: string = 'init') {
		if (!this.runtime) {
			return
		}

		let evtKey = 'connectExternal'
		if (!this.eventsFlagMap[evtKey]) {
			this.eventsMap[evtKey] = {}
			this.runtime.onConnectExternal.addListener(port => this.eventFunction(evtKey, port))
			this.eventsFlagMap[evtKey] = true
		}

		this.eventsMap[evtKey][key] = callback
	}

	/**
	 * Remove onConnectExternal event
	 * If the key is *, all events are deleted.
	 *
	 * @param {String} key Event identify name
	 *
	 * @returns {void}
	 */
	removeConnectExternal(key: string) {
		if (!this.runtime) {
			return
		}

		let evtKey = 'connectExternal'
		let remainCount = this.removeEventFunction(evtKey, key)
		if (!remainCount) {
			this.runtime.onConnectExternal.removeListener(port => this.eventFunction(evtKey, port))
			this.eventsFlagMap[evtKey] = false
		}
	}

	/**
	 * Chrome.commands
	 * Fired when a registered command is activated using a keyboard shortcut.
	 *
	 * @param {String} key Event identify name
	 * @param {eventFunction} callback callback function
	 */
	onCommand(callback: Function, key: string = 'init') {
		if (!this.commands) {
			return
		}

		let evtKey = 'command'
		if (!this.eventsFlagMap[evtKey]) {
			this.eventsMap[evtKey] = {}
			this.commands.onCommand.addListener(command => this.eventFunction(evtKey, command))
			this.eventsFlagMap[evtKey] = true
		}

		this.eventsMap[evtKey][key] = callback
	}

	/**
	 * Remove onCommand event
	 * If the key is *, all events are deleted.
	 *
	 * @param {String} key Event identify name
	 */
	removeCommand(key: string) {
		if (!this.runtime) {
			return
		}

		let evtKey = 'command'
		let remainCount = this.removeEventFunction(evtKey, key)
		if (!remainCount) {
			this.runtime.onConnectExternal.removeListener(port => this.eventFunction(evtKey, port))
			this.eventsFlagMap[evtKey] = false
		}
	}
}

export default new Runtime()
