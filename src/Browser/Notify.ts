import {ENUM_STATUS} from '../Lib/Enum'
import {createResult} from '../Lib/Func'

interface iNotify {
	setOptions(id: string, options?: chrome.notifications.NotificationOptions)
	onClicked(id: string, callback: (notificationId: string) => void)
	removeClicked(id: string)
	onClosed(id: string, callback: (notificationId: string, byUser: boolean) => void)
	removeClosed(id: string)
	onButtonClicked(id: string, callback: (notificationId: string, buttonIndex: number) => void)
	removeButtonClicked(id: string)
	onPermissionChanged(id: string, callback: (level: string) => void)
	removePermissionChanged(id: string)
	create(id: string, options?: chrome.notifications.NotificationOptions): Promise<string>
	update(id: string, options?: chrome.notifications.NotificationOptions): Promise<boolean>
	getAll(): Promise<Object>
}

interface iNotifyOption {
	options: chrome.notifications.NotificationOptions
	clicked: ((notificationId: string) => void) | null
	closed: ((notificationId: string, byUser: boolean) => void) | null
	buttonClicked: ((notificationId: string, buttonIndex: number) => void) | null
	showSettings: (() => void) | null
	permissionChanged: ((level: string) => void) | null
}

/**
 * @type/chrome.notifications
 */
export class Notify implements iNotify {
	private notify: typeof chrome.notifications
	private notifyMap: {[name: string]: iNotifyOption}

	constructor() {
		this.notify = chrome.notifications
		this.notifyMap = {}
	}

	private setupNotifyOption(id: string) {
		if (!this.notifyMap[id]) {
			this.notifyMap[id] = {
				options: {},
				clicked: null,
				closed: null,
				buttonClicked: null,
				showSettings: null,
				permissionChanged: null,
			}
		}
	}

	/**
	 * 알림의 기본 옵션을 정의합니다.
	 *
	 * @param id 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.
	 * @param options https://developer.chrome.com/docs/extensions/reference/notifications/#type-NotificationOptions 를 참조하세요.
	 */
	setOptions(id: string, options: chrome.notifications.NotificationOptions = {}): Notify {
		if (!this.notify) {
			throw createResult(ENUM_STATUS.ERROR, 'Not found chrome.notifications.')
		}

		let defaultOptions: chrome.notifications.NotificationOptions = {
			type: 'basic',
		}

		this.setupNotifyOption(id)

		this.notifyMap[id].options = Object.assign({}, defaultOptions, options)

		return this
	}

	/**
	 * 사용자가 알림의 버튼이 아닌 영역을 클릭시 발생하는 이벤트입니다.
	 *
	 * @param id 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.
	 * @param callback notification의 ID를 반환합니다.
	 */
	onClicked(id: string, callback: (notificationId: string) => void): Notify {
		if (!this.notify) {
			throw createResult(ENUM_STATUS.ERROR, 'Not found chrome.notifications.')
		}

		this.setupNotifyOption(id)

		if (this.notifyMap[id].clicked) {
			this.removeClicked(id)
		}

		this.notifyMap[id].clicked = notifyId => {
			if (notifyId == id) {
				callback(id)
			}
		}
		let evtCallback = this.notifyMap[id].clicked
		if (evtCallback != null) {
			this.notify.onClicked.addListener(evtCallback)
		}

		return this
	}

	/**
	 * 클릭시 발생되는 이벤트를 제거합니다.
	 *
	 * @param id 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.
	 */
	removeClicked(id: string): Notify {
		if (!this.notify) {
			throw createResult(ENUM_STATUS.ERROR, 'Not found chrome.notifications.')
		} else if (!this.notifyMap[id]) {
			return this
		}

		let evtCallback = this.notifyMap[id].clicked
		if (evtCallback != null) {
			this.notify.onClicked.removeListener(evtCallback)
			this.notifyMap[id].clicked = null
		}

		return this
	}

	/**
	 * 시스템 또는 사용자 작업에 의해 알림이 닫혔을 때 발생하는 이벤트 입니다.
	 *
	 * @param id 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.
	 * @param callback notification의 ID 및 사용자에 의해 닫힌 여부를 반환합니다.
	 */
	onClosed(id: string, callback: (notificationId: string, byUser: boolean) => void): Notify {
		if (!this.notify) {
			throw createResult(ENUM_STATUS.ERROR, 'Not found chrome.notifications.')
		}

		this.setupNotifyOption(id)
		if (this.notifyMap[id].closed) {
			this.removeClosed(id)
		}

		this.notifyMap[id].closed = (notifyId, byUser) => {
			if (notifyId == id) {
				callback(notifyId, byUser)
			}
		}
		let evtCallback = this.notifyMap[id].closed
		if (evtCallback != null) {
			this.notify.onClosed.addListener(evtCallback)
		}

		return this
	}

	/**
	 * 알림이 닫혔을 때 발생하는 이벤트를 제거합니다.
	 *
	 * @param id 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.
	 */
	removeClosed(id: string): Notify {
		if (!this.notify) {
			throw createResult(ENUM_STATUS.ERROR, 'Not found chrome.notifications.')
		} else if (!this.notifyMap[id]) {
			return this
		}

		let evtCallback = this.notifyMap[id].closed
		if (evtCallback != null) {
			this.notify.onClosed.removeListener(evtCallback)
			this.notifyMap[id].closed = null
		}

		return this
	}

	/**
	 * 사용자가 알림에서 버튼을 눌렀을 때 발생하는 이벤트입니다.
	 *
	 * @param id 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.
	 * @param callback notification의 ID 및 누른 버튼의 Index를 반환합니다.
	 */
	onButtonClicked(id: string, callback: (notificationId: string, buttonIndex: number) => void): Notify {
		if (!this.notify) {
			throw createResult(ENUM_STATUS.ERROR, 'Not found chrome.notifications.')
		}

		this.setupNotifyOption(id)
		if (this.notifyMap[id].buttonClicked) {
			this.removeButtonClicked(id)
		}

		this.notifyMap[id].buttonClicked = (notifyId, index) => {
			if (notifyId == id) {
				callback(notifyId, index)
			}
		}
		let evtCallback = this.notifyMap[id].buttonClicked
		if (evtCallback != null) {
			this.notify.onButtonClicked.addListener(evtCallback)
		}

		return this
	}

	/**
	 * 버튼을 눌렀을 때 발생하는 이벤트를 제거합니다.
	 *
	 * @param id 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.
	 */
	removeButtonClicked(id: string): Notify {
		if (!this.notify) {
			throw createResult(ENUM_STATUS.ERROR, 'Not found chrome.notifications.')
		} else if (!this.notifyMap[id]) {
			return this
		}

		let evtCallback = this.notifyMap[id].buttonClicked
		if (evtCallback != null) {
			this.notify.onButtonClicked.removeListener(evtCallback)
			this.notifyMap[id].buttonClicked = null
		}

		return this
	}

	/**
	 * 사용자가 권한 수준을 변경합니다. Chrome 47부터는 ChromeOS에만이 이벤트를 전달하는 UI가 있습니다.
	 *
	 * @param id 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.
	 * @param callback notification의 권한 레벨을 반환합니다.
	 */
	onPermissionChanged(id: string, callback: (level: string) => void): Notify {
		if (!this.notify) {
			throw createResult(ENUM_STATUS.ERROR, 'Not found chrome.notifications.')
		}

		this.setupNotifyOption(id)
		if (this.notifyMap[id].permissionChanged) {
			this.removePermissionChanged(id)
		}

		this.notifyMap[id].permissionChanged = callback

		let evtCallback = this.notifyMap[id].permissionChanged
		if (evtCallback != null) {
			this.notify.onPermissionLevelChanged.addListener(evtCallback)
		}

		return this
	}

	/**
	 * 권한 수준을 변경 이벤트를 삭제합니다.
	 *
	 * @param id 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.
	 */
	removePermissionChanged(id: string): Notify {
		if (!this.notify) {
			throw createResult(ENUM_STATUS.ERROR, 'Not found chrome.notifications.')
		} else if (!this.notifyMap[id]) {
			return this
		}

		let evtCallback = this.notifyMap[id].permissionChanged
		if (evtCallback != null) {
			this.notify.onPermissionLevelChanged.removeListener(evtCallback)
			this.notifyMap[id].permissionChanged = null
		}

		return this
	}

	/**
	 * 알림을 만들고 표시합니다.
	 *
	 * @param id 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.
	 * @param options https://developer.chrome.com/docs/extensions/reference/notifications/#type-NotificationOptions 를 참조하세요.
	 *
	 * @return Promise - notification ID를 반환합니다.
	 */
	create(id: string, options: chrome.notifications.NotificationOptions = {}): Promise<string> {
		if (!this.notify) {
			throw createResult(ENUM_STATUS.ERROR, 'Not found chrome.notifications.')
		}

		return new Promise(resolve => {
			let notifyOption = Object.assign({}, options)
			if (this.notifyMap[id]) {
				if (this.notifyMap[id].options) {
					notifyOption = Object.assign(notifyOption, this.notifyMap[id].options)
				}
			}

			this.notify.create(id, notifyOption, id => {
				resolve(id)
			})
		})
	}

	/**
	 *
	 * @param id 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.
	 * @param options https://developer.chrome.com/docs/extensions/reference/notifications/#type-NotificationOptions 를 참조하세요.
	 *
	 * @return Promise - Update 여부를 반환합니다.
	 */
	update(id: string, options: chrome.notifications.NotificationOptions = {}): Promise<boolean> {
		if (!this.notify) {
			throw createResult(ENUM_STATUS.ERROR, 'Not found chrome.notifications.')
		}

		return new Promise(resolve => {
			let notifyOption = Object.assign({}, options)
			if (this.notifyMap[id]) {
				if (this.notifyMap[id].options) {
					notifyOption = Object.assign(notifyOption, this.notifyMap[id].options)
				}
			}

			this.notify.update(id, notifyOption, wasUpdated => {
				resolve(wasUpdated)
			})
		})
	}

	/**
	 * 이 앱 또는 확장 프로그램의 모든 알림을 가져옵니다.
	 */
	getAll(): Promise<Object> {
		if (!this.notify) {
			throw createResult(ENUM_STATUS.ERROR, 'Not found chrome.notifications.')
		}

		return new Promise(resolve => {
			this.notify.getAll(resolve)
		})
	}
}

export default new Notify()
