import {EventEmitter} from 'events'
import {ENUM_STATUS} from '../Lib/Enum'
import {createResult} from '../Lib/Func'

export interface iWindows {
	get(name: string): chrome.windows.Window | null
	getId(id: number, callback: (win: chrome.windows.Window) => void): void
	getAll(callback: (wins: chrome.windows.Window[]) => void): void
	open(name: string, options: chrome.windows.CreateData, isOnce?: boolean)
	update(id: number, info: chrome.windows.UpdateInfo, callback: ((window: chrome.windows.Window) => void) | undefined): void
	close(windowId: number)
}

let itemsIds: {[key: number]: {_name: string} & chrome.windows.Window} = {}
let itemsName: {[key: string]: chrome.windows.Window} = {}

export class windows extends EventEmitter implements iWindows, EventEmitter {
	private window: typeof chrome.windows | null
	private isAddEvent: boolean

	constructor() {
		super()

		this.setMaxListeners(100)

		this.window = chrome.windows || null

		this.isAddEvent = false
	}

	/**
	 * 고유 이름의 Window 반환
	 *
	 * @param name 고유 이름
	 */
	get(name: string): chrome.windows.Window | null {
		if (!this.window) {
			throw createResult(ENUM_STATUS.ERROR, 'Not found chrome.windows.')
		}

		return itemsName[name] || null
	}

	/**
	 * 창에 대한 세부 정보를 가져옵니다.
	 *
	 * @param id Window ID
	 * @param callback Window 존재시 호출
	 */
	getId(id: number, callback: (win: chrome.windows.Window) => void): void {
		if (!this.window) {
			throw createResult(ENUM_STATUS.ERROR, 'Not found chrome.windows.')
		}

		this.window.get(id, win => {
			callback(win)
		})
	}

	/**
	 * 모든 창을 가져옵니다.
	 *
	 * @param callback Windows 존재시 호출
	 */
	getAll(callback: (wins: chrome.windows.Window[]) => void): void {
		if (!this.window) {
			throw createResult(ENUM_STATUS.ERROR, 'Not found chrome.windows.')
		}

		this.window.getAll(callback)
	}

	/**
	 * 선택적 크기 조정, 위치 또는 제공된 기본 URL을 사용하여 새 브라우저 창을 생성 (열기)합니다.
	 *
	 * @param name 고유이름
	 * @param createOption Window 옵션, https://developer.chrome.com/docs/extensions/reference/windows/#method-create 참조
	 * @param isOnce 단일 페이지 생성여부
	 */
	open(name: string, options: chrome.windows.CreateData, isOnce: boolean = false): void {
		if (!this.window) {
			throw createResult(ENUM_STATUS.ERROR, 'Not found chrome.windows.')
		} else if (Object.keys(options).length < 1) {
			throw createResult(ENUM_STATUS.ERROR, 'Required create option')
		}

		if (!this.isAddEvent) {
			this.isAddEvent = true
			this.window.onRemoved.addListener(winId => {
				if (winId !== undefined && itemsIds[winId] !== undefined) {
					let item = itemsIds[winId]
					if (itemsName[item._name] !== undefined) {
						delete itemsName[item._name]
					}
					delete itemsIds[winId]

					this.emit('remove', item)
				}
			})
		}

		if (isOnce && itemsName[name] !== undefined) {
			this.window.update(itemsName[name].id, {focused: true})
			this.emit('update', itemsIds[itemsName[name].id])
		} else if (isOnce) {
			this.window.create(options, win => {
				if (win !== undefined) {
					itemsName[name] = win
					itemsIds[win.id] = Object.assign({_name: name}, win)
					this.emit('create', itemsIds[win.id])
				}
			})
		} else {
			this.window.create(options, win => {
				if (win !== undefined) {
					itemsName[name] = win
					itemsIds[win.id] = Object.assign({_name: name}, win)
					this.emit('create', itemsIds[win.id])
				}
			})
		}
	}

	/**
	 * 창의 속성을 업데이트합니다. 변경할 속성 만 지정하십시오.
	 * 
	 * 지정되지 않은 속성은 변경되지 않습니다.
	 * 
	 * @param id Window ID
	 * @param info https://developer.chrome.com/docs/extensions/reference/windows/#method-update 참조
	 * @param callback 업데이트된 Window를 반환합니다.
	 */
	update(id: number, info: chrome.windows.UpdateInfo, callback: ((window: chrome.windows.Window) => void) | undefined): void {
		if (!this.window) {
			throw createResult(ENUM_STATUS.ERROR, 'Not found chrome.windows.')
		}

		this.window.update(id, info, callback)
	}

	/**
	 * 창과 그 안의 모든 탭을 제거 (닫습니다).
	 * 
	 * @param id Window ID
	 */
	close(id: number) {
		if (!this.window) {
			throw createResult(ENUM_STATUS.ERROR, 'Not found chrome.windows.')
		} else if (!id) {
			throw createResult(ENUM_STATUS.ERROR, 'Required window id')
		}

		this.window.remove(id, winId => {
			if (winId !== undefined && itemsIds[winId] !== undefined) {
				let item = itemsIds[winId]
				if (itemsName[item._name] !== undefined) {
					delete itemsName[item._name]
				}
				delete itemsIds[winId]

				this.emit('remove', item)
			}
		})
	}
}

export default new windows()
