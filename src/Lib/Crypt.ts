import { createHash, createHmac, randomBytes, createCipheriv, createDecipheriv } from 'crypto'

/**
 * Create Hash
 * @param {String} type Hash type (md5, sha256, sha512....)
 * @param {String|Number} txt
 */
export const Hash = (type: string, txt: string | number): string => {
	return createHash(type).update(String(txt)).digest('hex')
}

/**
 * create hash hmac
 * @param {String} text sign text
 * @param {String} secret Secret key
 * @param {String} algorithm md5, sha256, sha512...
 * @param {Boolean} isHex return type is Hex?
 */
export const HashHmac = (text: string | Buffer, secret: string, algorithm: string = 'sha256', isHex: boolean = true): any | string | Buffer => {
	let hmac = createHmac(algorithm, secret)
	hmac.update(text)
	if (isHex) {
		return hmac.digest('hex')
	} else {
		return hmac.digest()
	}
}

/**
 * Symmetric encryption
 * @param {String} text
 * @param {String} salt
 */
export const encryptData = (text: string | number, salt: string) => {
	text = String(text)

	let cryptKey: string = Hash('md5', salt)

	let iv = randomBytes(16)
	let cipher = createCipheriv('aes-256-cbc', Buffer.from(cryptKey), iv)
	let encrypted = cipher.update(text)

	encrypted = Buffer.concat([encrypted, cipher.final()])
	let hmac = HashHmac(encrypted, cryptKey, 'sha256', false)

	return Buffer.concat([iv, hmac, encrypted]).toString('base64')
}

/**
 * Symmetric decryption
 * @param {String} text
 * @param {String} salt
 */
export const decryptData = (encryptData: string | number, salt: string): string => {
	encryptData = String(encryptData)

	let cryptKey: string = Hash('md5', salt)

	let buf = Buffer.from(encryptData, 'base64')
	let iv = Buffer.from(buf.slice(0, 16))
	//let hmac = buf.slice(16, 32)
	buf = buf.slice(48)

	let decipher = createDecipheriv('aes-256-cbc', Buffer.from(cryptKey), iv)
	let decrypted = decipher.update(buf)
	decrypted = Buffer.concat([decrypted, decipher.final()])

	return decrypted.toString()
}


export default {
	Hash,
	HashHmac,
	encryptData,
	decryptData
}