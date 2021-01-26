import {EventEmitter} from 'events'
import {ENUM_STORAGE, ENUM_TYPE} from '../Lib/Enum'

interface iStorage {
	changeType(type: ENUM_STORAGE): iStorage

	save(key: string | number, val: any): Promise<void>
	load(key: string | number): Promise<any>
	remove(key: string | number): Promise<any>
}
/**
 * Library for easy storage
 * Support Browser & Local Storage
 *
 * @author Pixel
 * @since 2020.10.21
 */

let isAddListener: boolean = false
export class Storage extends EventEmitter implements iStorage, EventEmitter {
	private storageType: ENUM_TYPE
	private supportStorage: boolean
	private storage: any

	constructor() {
		super()

		this.setMaxListeners(100)

		this.storageType = ENUM_TYPE.BRWOSER
		this.supportStorage = true

		try {
			this.changeType(ENUM_STORAGE.LOCAL)
		} catch (e) {
			this.changeType(ENUM_STORAGE.LOCALSTORAGE)
		}
	}

	/**
	 * changed Storage type
	 * @param {ENUM_STORAGE} type
	 */
	changeType(type: ENUM_STORAGE): Storage {
		if (!this.supportStorage) {
			this.storageType = ENUM_TYPE.LOCAL
			this.storage = localStorage

			return this
		}

		try {
			if (type == ENUM_STORAGE.LOCALSTORAGE) {
				this.storageType = ENUM_TYPE.LOCAL
				this.storage = localStorage
			} else if (type == ENUM_STORAGE.SYNC) {
				this.storageType = ENUM_TYPE.BRWOSER
				this.storage = chrome.storage.sync
			} else if (type == ENUM_STORAGE.LOCAL) {
				this.storageType = ENUM_TYPE.BRWOSER
				this.storage = chrome.storage.local
			} else {
				//throw new Error('Unknwon Storage type')
			}

			if (this.storageType == ENUM_TYPE.BRWOSER) {
				if (!isAddListener) {
					isAddListener = true
					chrome.storage.onChanged.addListener((r: any) => {
						this.emit('change', r)
					})
				}
			}
		} catch (e) {
			//throw new Error('Not support browser.')
		}

		this.emit('changeType', this.storageType)

		return this
	}

	/**
	 * 지정한 Storage에 값 저장
	 * @param {String|Number} key storage key
	 * @param {*} val storage data
	 */
	save(key: string | number, val: any): Promise<void> {
		return new Promise(resolve => {
			if (this.storageType == ENUM_TYPE.LOCAL) {
				this.storage.setItem(key, val)
				this.emit('save', {
					key: key,
					val: val,
				})
				resolve()
			} else {
				const _key = `${key}`
				this.storage.set({[_key]: val}, () => {
					this.emit('save', {
						key: _key,
						val: val,
					})
					resolve()
				})
			}
		})
	}

	/**
	 * 지정한 Storage에 값 불러오기
	 * @param {String|Number} key storage key
	 */
	load(key: string | number): Promise<any> {
		return new Promise(resolve => {
			if (this.storageType == ENUM_TYPE.LOCAL) {
				let val = this.storage.getItem(key) || null
				resolve(val)
				this.emit('load', {
					key: key as string,
					val: val,
				})
			} else {
				const _key = `${key}`

				this.storage.get([_key], (items: any) => {
					try {
						this.emit('load', {
							key: _key,
							val: items[_key],
						})
						resolve(items[_key])
					} catch (err) {
						resolve(undefined)
					}
				})
			}
		})
	}

	/**
	 * 지정한 Storage의 값 삭제
	 * @param {String|Number} key storage key
	 */
	remove(key: string | number): Promise<any> {
		return new Promise(resolve => {
			if (this.storageType == ENUM_TYPE.LOCAL) {
				this.emit('remove', {
					key: key as string,
				})
				resolve(this.storage.removeItem(key) || null)
			} else {
				const _key = `${key}`

				this.storage.remove([_key], (items: any) => {
					try {
						this.emit('remove', {
							key: _key as string,
						})
						resolve(items[_key])
					} catch (err) {
						resolve(undefined)
					}
				})
			}
		})
	}

	loadRemove(key: string): Promise<any> {
		return new Promise(async resolve => {
			try {
				let val = await this.load(key)
				await this.remove(key)

				resolve(val)
			} catch (err) {
				throw err
			}
		})
	}
}

export default new Storage()
