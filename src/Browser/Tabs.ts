import {EventEmitter} from 'events'

export interface iTabInfo {
	id: number | null
	index: number
	status: string | null
	title: string | null
	host: string
	origin: string | null
	favIcon: string | null
	windowId: number
}

interface tabResult {
	tab: chrome.tabs.Tab | null
	info: iTabInfo | null
}

export interface iTabsEvent {
	getInfo(tab: chrome.tabs.Tab): iTabInfo
	getTab(tabId: number): Promise<tabResult>
	getTabIndex(index: number, options: chrome.tabs.QueryInfo | null): Promise<tabResult>
	getTabs(options: chrome.tabs.QueryInfo | null): Promise<tabResult[]>
	getActiveTab(index: number): Promise<tabResult>
	getItems(): Promise<{[tabId: string]: {info: iTabInfo}}>
	getActiveItem(): Promise<tabResult | null>

	onActivated(callback: (tab: chrome.tabs.Tab, info: iTabInfo) => void, key: string): iTabsEvent
	removeActivated(key: string): iTabsEvent
	onUpdated(callback: (tab: chrome.tabs.Tab, info: iTabInfo) => void, key: string): iTabsEvent
	removeUpdated(key: string): iTabsEvent
	onRemoved(callback: (tabId: number) => void, key: string): iTabsEvent
	removeRemoved(key: string): iTabsEvent
}

function tabParse(tab: chrome.tabs.Tab): iTabInfo {
	let url = ''
	let host: string = ''
	let origin: string | null = null
	if (tab && tab.url) {
		url = tab.url || ''
		let urlList = url.split('/')
		host = urlList[2] || ''
		origin = (urlList.slice(0, 3) || []).join('/')
	}

	return {
		id: tab.id || null,
		index: tab.index,
		status: tab.status || null,
		title: tab.title || null,
		host: host,
		origin: origin,
		favIcon: tab.favIconUrl || null,
		windowId: tab.windowId,
	}
}

const SYSTEM_EVENT_KEY = '___MTC_init___'
let emptyTabResult = {
	tab: null,
	info: null,
}

export class tabsEvent extends EventEmitter implements iTabsEvent, EventEmitter {
	static instance: tabsEvent

	private tabs: typeof chrome.tabs | null
	private activeId: number | null
	private tabItems: {[tabId: string]: iTabInfo}
	private eventsFlagMap: {[key: string]: boolean}
	private eventsMap: {[key: string]: {[key: string]: Function}}

	constructor() {
		if (!tabsEvent.instance) {
			super()
			this.tabs = chrome.tabs || null

			this.activeId = null
			this.tabItems = {}
			this.eventsFlagMap = {}
			this.eventsMap = {}

			this.init()

			tabsEvent.instance = this
		}

		return tabsEvent.instance
	}

	private init() {
		if (this.tabs) {
			this.tabs.query({}, tabs => {
				tabs.map(tab => {
					if (tab == null) {
						return
					}

					if (tab.active) {
						this.activeId = tab.id || null
					}

					let tabInfo = tabParse(tab)

					if (tab.active) {
						this.emit('active', {
							tab: tab,
							info: tabInfo,
						})
					}
					this.emit('change', {
						tab: tab,
						info: tabInfo,
					})
				})
			})
		}

		this.onActivated((tab, info) => {
			if (tab == null) {
				return
			}

			if (tab.active) {
				this.activeId = tab.id || null
			}

			if (!tab.id) {
				return
			}

			if (info != null) {
				this.tabItems[tab.id] = info
			}

			if (tab.active) {
				this.emit('active', {
					tab: tab,
					info: info,
				})
			}
			this.emit('change', {
				tab: tab,
				info: info,
			})
		}, SYSTEM_EVENT_KEY)

		this.onUpdated((tab, info) => {
			if (tab == null) {
				return
			} else if (tab.status == 'loading') {
				return
			}

			if (tab.active) {
				this.activeId = tab.id || null
			}

			if (!tab.id) {
				return
			}

			let cacheItem = this.tabItems[tab.id] || {origin: null}
			if (cacheItem.origin == info.origin) {
				return
			} else if (info != null) {
				this.tabItems[tab.id] = info
			}

			if (tab.active) {
				this.emit('active', {
					tab: tab,
					info: info,
				})
			}

			this.emit('change', {
				tab: tab,
				info: info,
			})
		}, SYSTEM_EVENT_KEY)

		this.onRemoved(tabId => {
			try {
				if (this.tabItems[tabId]) {
					this.emit('remove', {
						info: this.tabItems[tabId],
					})
					delete this.tabItems[tabId]
				}
			} catch (err) {
				//
			}
		}, SYSTEM_EVENT_KEY)

		this.getActiveTab().then(({tab, info}) => {
			if (tab == null) {
				return
			}

			if (tab.active) {
				this.activeId = tab.id || null
			}

			if (!tab.id) {
				return
			}

			if (info != null) {
				this.tabItems[tab.id] = info
			}

			if (tab.active) {
				this.emit('active', {
					tab: tab,
					info: info,
				})
			}
			this.emit('change', {
				tab: tab,
				info: info,
			})
		})
	}

	getInfo(tab: chrome.tabs.Tab): iTabInfo {
		return tabParse(tab)
	}

	/**
	 * Chrome.tabs.get
	 *
	 * Retrieves details about the specified tabs index.
	 *
	 * @param {number} tabId
	 */
	getTab(tabId: number): Promise<tabResult> {
		return new Promise((resolve, reject) => {
			if (!this.tabs) {
				console.warn('BrowserExt: Not support chrome.tabs')
				return reject(emptyTabResult)
			}

			try {
				try {
					this.tabs.get(tabId, tab => {
						let tabInfo = tabParse(tab)

						resolve({
							tab: tab,
							info: tabInfo,
						})
					})
				} catch (err) {
					reject(err)
				}
			} catch (err) {
				reject(err)
			}
		})
	}

	/**
	 * Chrome.tabs.get
	 *
	 * Retrieves details about the specified tabs index.
	 *
	 * @param {number} index
	 */
	getTabIndex(index: number = 0, options: chrome.tabs.QueryInfo | null = null): Promise<tabResult> {
		return new Promise((resolve, reject) => {
			if (!this.tabs) {
				console.warn('BrowserExt: Not support chrome.tabs')
				return reject(emptyTabResult)
			}

			try {
				this.getTabs(options)
					.then(tabs => {
						if (!this.tabs) {
							console.warn('BrowserExt: Not support chrome.tabs')
							return reject(emptyTabResult)
						}

						try {
							if (tabs == null) {
								return resolve(emptyTabResult)
							} else if (tabs[index] == null) {
								return resolve(emptyTabResult)
							}

							let tab = tabs[index].tab || {id: null}
							let tabId = tab.id || null
							if (tabId == null) {
								return resolve(emptyTabResult)
							}

							this.tabs.get(tabId, tab => {
								let tabInfo = tabParse(tab)
								resolve({
									tab: tab,
									info: tabInfo,
								})
							})
						} catch (err) {
							reject(err)
						}
					})
					.catch(err => {
						reject(err)
					})
			} catch (err) {
				reject(err)
			}
		})
	}

	/**
	 * Chrome.tabs.query -> Chrome.tabs.get
	 *
	 * Retrieves details about the specified active tab.
	 *
	 * @param {number} index
	 */
	async getActiveTab(index: number = 0): Promise<tabResult> {
		try {
			return await this.getTabIndex(index, {active: true})
		} catch (err) {
			console.warn('BrowserExt: ' + err.message || err)
			return {
				tab: null,
				info: null,
			}
		}
	}

	/**
	 * Returns a list of tabs stored in the class.
	 */
	getItems(): Promise<{[tabId: string]: {info: iTabInfo}}> {
		return new Promise(resolve => {
			setTimeout(() => {
				let tabItems: {[tabId: string]: {info: iTabInfo}} = {}
				let items = Object.entries(this.tabItems)
				for (let [k, v] of items) {
					tabItems[k] = {
						info: v,
					}
				}
				return resolve(tabItems)
			}, 100)
		})
	}

	/**
	 * Returns the active tab information stored in the class.
	 */
	getActiveItem(): Promise<tabResult | null> {
		return new Promise(resolve => {
			setTimeout(() => {
				if (!this.activeId) {
					return resolve(null)
				}

				if (!this.tabItems[this.activeId]) {
					return resolve(null)
				}

				let tabInfo = this.tabItems[this.activeId] || {}

				return resolve({
					tab: null,
					info: tabInfo,
				})
			}, 100)
		})
	}

	/**
	 * Chrome.tabs.get
	 *
	 * Gets all tabs that have the specified properties, or all tabs if no properties are specified.
	 *
	 * @param {chrome.tabs.QueryInfo | null} options
	 */
	getTabs(options: chrome.tabs.QueryInfo | null = null): Promise<tabResult[]> {
		return new Promise((resolve, reject) => {
			if (!this.tabs) {
				console.warn('BrowserExt: Not support chrome.tabs')
				return reject(null)
			}

			if (options == null) {
				options = {
					active: true,
				}
			}

			try {
				this.tabs.query(options, tabs => {
					let tabItems: tabResult[] = []
					tabs.map(tab => {
						let tabInfo = tabParse(tab)
						tabItems.push({
							tab: tab,
							info: tabInfo,
						})
					})
					resolve(tabItems)
				})
			} catch (err) {
				reject(err)
			}
		})
	}

	/**
	 * Chrome.tabs.onActivated
	 * Fires when the active tab in a window changes. Note that the tab's URL may not be set at the time this event fired, but you can listen to onUpdated events so as to be notified when a URL is set.
	 *
	 * @param {Function} callback
	 * @param {string} key optional
	 */
	onActivated(callback: (tab: chrome.tabs.Tab, info: iTabInfo) => void, key: string = 'init'): tabsEvent {
		if (!this.tabs) {
			console.warn('BrowserExt: Not support chrome.tabs')
			return this
		}

		let evtKey = 'activated'
		if (!this.eventsFlagMap[evtKey]) {
			this.eventsMap[evtKey] = {}
			this.tabs.onActivated.addListener(tabs => {
				if (!this.tabs) {
					return
				}

				this.tabs.get(tabs.tabId, tab => {
					try {
						let tabInfo = tabParse(tab)

						let list = Object.values(this.eventsMap[evtKey]) || []
						list.map(cb => {
							cb(tab, tabInfo)
						})
					} catch (err) {
						//
					}
				})
			})

			this.eventsFlagMap[evtKey] = true
		}

		this.eventsMap[evtKey][key] = callback

		return this
	}

	/**
	 * Remove onInstalled event
	 * If the key is *, all events are deleted.
	 *
	 * @param {String} key Event identify name
	 */
	removeActivated(key: string = 'init'): tabsEvent {
		if (!this.tabs) {
			console.warn('BrowserExt: Not support chrome.tabs')
			return this
		}

		let evtKey = 'activated'
		if (!this.eventsFlagMap[evtKey]) {
			return this
		} else if (!this.eventsMap[evtKey][key]) {
			return this
		}

		if (key == '*') {
			let list = Object.entries(this.eventsMap[evtKey])
			for (let [k, _v] of list) {
				if (k != SYSTEM_EVENT_KEY) {
					delete this.eventsMap[evtKey][k]
				}
			}
		} else {
			delete this.eventsMap[evtKey][key]
		}

		return this
	}

	/**
	 * Chrome.tabs.onUpdated
	 * Fires when the active tab in a window changes. Note that the tab's URL may not be set at the time this event fired, but you can listen to onUpdated events so as to be notified when a URL is set.
	 *
	 * @param {Function} callback
	 * @param {string} key optional
	 */
	onUpdated(callback: (tab: chrome.tabs.Tab, info: iTabInfo) => void, key: string = 'init'): tabsEvent {
		if (!this.tabs) {
			console.warn('BrowserExt: Not support chrome.tabs')
			return this
		}

		let evtKey = 'updated'
		if (!this.eventsFlagMap[evtKey]) {
			this.eventsMap[evtKey] = {}
			this.tabs.onUpdated.addListener((_tabId, _changeInfo, tab) => {
				if (!this.tabs || !tab) {
					return
				}
				try {
					let tabInfo = tabParse(tab)

					let list = Object.values(this.eventsMap[evtKey]) || []
					list.map(cb => {
						cb(tab, tabInfo)
					})
				} catch (err) {
					//
				}
			})

			this.eventsFlagMap[evtKey] = true
		}

		this.eventsMap[evtKey][key] = callback

		return this
	}

	/**
	 * Remove onInstalled event
	 * If the key is *, all events are deleted.
	 *
	 * @param {String} key Event identify name
	 */
	removeUpdated(key: string = 'init'): tabsEvent {
		if (!this.tabs) {
			console.warn('BrowserExt: Not support chrome.tabs')
			return this
		}

		let evtKey = 'updated'
		if (!this.eventsFlagMap[evtKey]) {
			return this
		} else if (!this.eventsMap[evtKey][key]) {
			return this
		}

		if (key == '*') {
			let list = Object.entries(this.eventsMap[evtKey])
			for (let [k, _v] of list) {
				if (k != SYSTEM_EVENT_KEY) {
					delete this.eventsMap[evtKey][k]
				}
			}
		} else {
			delete this.eventsMap[evtKey][key]
		}

		return this
	}

	/**
	 * Chrome.tabs.onRemoved
	 * Fired when a tab is closed.
	 *
	 * @param {Function} callback
	 * @param {string} key optional
	 */
	onRemoved(callback: (tabId: number) => void, key: string = 'init'): tabsEvent {
		if (!this.tabs) {
			console.warn('BrowserExt: Not support chrome.tabs')
			return this
		}

		let evtKey = 'removed'
		if (!this.eventsFlagMap[evtKey]) {
			this.eventsMap[evtKey] = {}
			this.tabs.onRemoved.addListener(tabId => {
				if (!this.tabs) {
					return
				}

				let list = Object.values(this.eventsMap[evtKey]) || []
				list.map(cb => {
					cb(tabId)
				})
			})

			this.eventsFlagMap[evtKey] = true
		}

		this.eventsMap[evtKey][key] = callback

		return this
	}

	/**
	 * Remove onInstalled event
	 * If the key is *, all events are deleted.
	 *
	 * @param {String} key Event identify name
	 */
	removeRemoved(key: string = 'init'): tabsEvent {
		if (!this.tabs) {
			console.warn('BrowserExt: Not support chrome.tabs')
			return this
		}

		let evtKey = 'removed'
		if (!this.eventsFlagMap[evtKey]) {
			return this
		} else if (!this.eventsMap[evtKey][key]) {
			return this
		}

		if (key == '*') {
			let list = Object.entries(this.eventsMap[evtKey])
			for (let [k, _v] of list) {
				if (k != SYSTEM_EVENT_KEY) {
					delete this.eventsMap[evtKey][k]
				}
			}
		} else {
			delete this.eventsMap[evtKey][key]
		}

		return this
	}
}

export default () => {
	const tabsCtrl = new tabsEvent()
	tabsCtrl.setMaxListeners(100)

	return tabsCtrl
}
