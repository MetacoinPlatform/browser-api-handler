import { ENUM_STATUS } from './Enum'
import {Hash, encryptData, decryptData} from './Crypt'

import storage from '../Browser/storage'

/**
 * Function for common use of result values
 * @param {String} result result Type
 * @param {String} msg result message
 * @param {*} data result data
 */
export const createResult = (result: ENUM_STATUS | string, msg: string = '', data: any = null): object => {
	return {
		result: result,
		msg: msg,
		data: data,
	}
}

export const makeid = (length: number, isMs: boolean = true) => {
	let result: string = ''
	let characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_' + (isMs ? '' : '0123456789')
	let charactersLength: number = characters.length
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength))
	}

	if (isMs) {
		result += String(Date.now())
		let wordList = result.split('')
		for (let i = wordList.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[wordList[i], wordList[j]] = [wordList[j], wordList[i]];
		}
		result = wordList.join('')
	}

	return result
}


/**
 * 암호화
 *
 * @param id Passpharse를 저장할 때 사용하는 Key
 * @param param 저장할 데이터
 *
 */
export const encryptValue = async (id: string | number, param: any): Promise<Object | null> => {
	let cryptKey = Hash('sha256', Math.random() + Date.now())
	try {
		await storage.save(`cryptMsg:${id}`, cryptKey)
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
 * 복호화
 *
 * @param id Passpharse를 저장할 때 사용하는 Key
 * @param data 암호화된 데이터
 */
export const decryptValue = async (id: string | number, data: any): Promise<Object | null> => {
	let cryptKey: string | null = null
	try {
		cryptKey = await storage.loadRemove(`cryptMsg:${id}`)
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
