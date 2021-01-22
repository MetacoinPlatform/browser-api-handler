import { ENUM_STATUS } from './Enum'

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