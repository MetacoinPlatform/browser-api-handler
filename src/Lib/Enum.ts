/**
 * HTTP METHODS
 */
export enum ENUM_METHODS {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	DELETE = 'DELETE',
}

export enum ENUM_SERVER {
	MAINNET = 1,
	TESTNET = 5,
}

/**
 * This class result status
 */
export enum ENUM_STATUS {
	SUCCESS = 'SUCCESS',
	ERROR = 'ERROR',
	WARNING = 'WARNING',
	DENIED = 'DENIED',
}

/**
 * Event list
 */
export enum ENUM_EVENT {
	REGISTER = 'REGISTER',
	ACCOUNTS = 'GET_ACCOUNTS',
	ADDRESSBOOK = 'GET_ADDRESSBOOK',
	STORE = 'UPDATE_STORE',
	NOTIFY = 'UPDATE_NOTIFY',
}

/**
 * @param {string} LOCALSTORAGE localStorage - Window LocalStorage
 * @param {string} LOCAL local - Browser.storage.local
 * @param {string} SYNC sync - Browser.storage.sync
 */
export enum ENUM_STORAGE {
	LOCALSTORAGE = 'localStorage',
	LOCAL = 'local',
	SYNC = 'sync',
}

/**
 * @param {string} LOCAL Window LocalStorage
 * @param {string} BRWOSER Browser.storage
 */
export enum ENUM_TYPE {
	LOCAL = 'LOCAL',
	BRWOSER = 'BRWOSER',
}
