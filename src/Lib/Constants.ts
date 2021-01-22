import {ENUM_SERVER} from './Enum'
import { Hash } from './Crypt'

const ENVS = process.env || {}

export const DEBUGMODE: boolean = ENVS.NODE_ENV !== 'production'

if (!ENVS.MTC_APP_ID && !ENVS.VUE_APP_MTC_ID && !ENVS.REACT_APP_MTC_ID) {
	console.warn(`Please set APP_ID in the environment variable.
Environment variable.
Any value of the ID shown below can be used.\n
- Default\t"MTC_APP_ID"
- Vue\t\t"VUE_APP_MTC_ID"
- React\t\t"REACT_APP_MTC_ID"`)
} else if (!ENVS.MTC_APP_TOKEN && !ENVS.VUE_APP_MTC_TOKEN && !ENVS.REACT_APP_MTC_TOKEN) {
	console.warn(`Please set APP_TOKEN in the environment variable
Environment variable.
Any value of the TOKEN shown below can be used.\n
- Default\t"MTC_APP_TOKEN"
- Vue\t\t"VUE_APP_MTC_TOKEN"
- React\t\t"REACT_APP_MTC_TOKEN"`)
}

export const APP_ID: string = ENVS.MTC_APP_ID || ENVS.VUE_APP_MTC_ID || ENVS.REACT_APP_MTC_ID || '' // `<Your APP_ID>`
export const APP_TOKEN: string = ENVS.MTC_APP_TOKEN || ENVS.VUE_APP_MTC_TOKEN || ENVS.REACT_APP_MTC_TOKEN || '' // `<Your APP_TOKEN>`

export const API_HOST: string = 'https://dapp.metacoin.network/v2'


export const STORAGE_SERVICE_KEY: string = Hash('md5', 'SystemData')
export const STORAGE_PREFERENCE_KEY: string = Hash('md5', 'UserData')


export const SERVER: {[key: string]: number} = {
	MAINNET: ENUM_SERVER.MAINNET,
	TESTNET: ENUM_SERVER.TESTNET,
}

export const SERVER_MAP: {[key: number]: string} = {
	[ENUM_SERVER.MAINNET]: 'Mainnet',
	[ENUM_SERVER.TESTNET]: 'Testnet',
}
