import * as crypto from 'crypto'
import * as ECKey from 'ec-key'

/**
 * Create Hash
 * @param {String} type Hash type (md5, sha256, sha512....)
 * @param {String|Number} txt
 */
export const Hash = (type: string, txt: string | number): string => {
	return crypto.createHash(type).update(String(txt)).digest('hex')
}

/**
 * create hash hmac
 * @param {String} text sign text
 * @param {String} secret Secret key
 * @param {String} algorithm md5, sha256, sha512...
 * @param {Boolean} isHex return type is Hex?
 */
export const HashHmac = (text: string | Buffer, secret: string, algorithm: string = 'sha256', isHex: boolean = true): any | string | Buffer => {
	let hmac = crypto.createHmac(algorithm, secret)
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

	let iv = crypto.randomBytes(16)
	let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(cryptKey), iv)
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

	let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(cryptKey), iv)
	let decrypted = decipher.update(buf)
	decrypted = Buffer.concat([decrypted, decipher.final()])

	return decrypted.toString()
}

export interface iRSACrypto {
	createEckey(): {
		public: string
		private: string
	}
	signEckey(data: any, signKey: string): Buffer
	publicEncrypt(param: any, encryptKey: string, padding: number): any
	privateDecrypt(encryptData: string, decryptKey: string, padding: number): string
	privateEncrypt(param: any, encryptKey: string, padding: number): any
	publicDecrypt(encryptData: string, decryptKey: string, padding: number): string
}

export class RSACrypto implements iRSACrypto {
	private ENCRYPT_BLOCKSIZE: number
	private DECRYPT_BLOCKSIZE: number

	constructor() {
		this.ENCRYPT_BLOCKSIZE = 245
		this.DECRYPT_BLOCKSIZE = 256
	}

	createEckey() {
		let key = ECKey.createECKey('P-384')
		let publicKey = key.asPublicECKey().toString('pem')
		let privateKey = key.toString('pem')

		return {
			public: publicKey,
			private: privateKey,
		}
	}

	signEckey(data: any, signKey: string) {
		let key = new ECKey(signKey, 'pem')
		return key.createSign('SHA384').update(data).sign('base64')
	}

	publicEncrypt(param: any, encryptKey: string, padding = crypto.constants.RSA_PKCS1_PADDING) {
		let r: any
		let encryptData = param

		while (encryptData) {
			let txt = encryptData.substr(0, this.ENCRYPT_BLOCKSIZE)
			encryptData = encryptData.substr(this.ENCRYPT_BLOCKSIZE)

			let v = crypto.publicEncrypt(
				{
					key: encryptKey,
					padding: padding,
				},
				Buffer.from(txt, 'utf-8')
			)
			if (!r) {
				r = v
			} else {
				r = Buffer.concat([r, v])
			}
		}
		return r.toString('base64')
	}

	privateDecrypt(encryptData: string, decryptKey: string, padding = crypto.constants.RSA_PKCS1_PADDING) {
		let r: string = ''
		let cryptTxt = Buffer.from(encryptData, 'base64')
		while (cryptTxt) {
			let decryptData = cryptTxt.slice(0, this.DECRYPT_BLOCKSIZE)
			cryptTxt = cryptTxt.slice(this.DECRYPT_BLOCKSIZE)
			try {
				let v = crypto.privateDecrypt(
					{
						key: decryptKey,
						padding: padding,
					},
					decryptData
				)
				r += v.toString('utf-8')
			} catch (er) {
				break
			}
		}

		return r
	}

	privateEncrypt(param: any, encryptKey: string, padding = crypto.constants.RSA_PKCS1_PADDING) {
		let r: any
		let encryptData = param

		while (encryptData) {
			let txt = encryptData.substr(0, this.ENCRYPT_BLOCKSIZE)
			encryptData = encryptData.substr(this.ENCRYPT_BLOCKSIZE)

			let v = crypto.privateEncrypt(
				{
					key: encryptKey,
					padding: padding,
				},
				Buffer.from(txt, 'utf-8')
			)
			if (!r) {
				r = v
			} else {
				r = Buffer.concat([r, v])
			}
		}
		return r.toString('base64')
	}

	publicDecrypt(encryptData: string, decryptKey: string, padding = crypto.constants.RSA_PKCS1_PADDING) {
		let r: string = ''

		let cryptTxt = Buffer.from(encryptData, 'base64')
		while (cryptTxt) {
			if (cryptTxt.length < 1) {
				break
			}

			let decryptData = cryptTxt.slice(0, this.DECRYPT_BLOCKSIZE)
			cryptTxt = cryptTxt.slice(this.DECRYPT_BLOCKSIZE)

			let v = crypto.publicDecrypt(
				{
					key: decryptKey,
					padding: padding,
				},
				decryptData
			)
			r += v.toString('utf-8')
		}

		return r
	}
}

export const RSA = new RSACrypto()
