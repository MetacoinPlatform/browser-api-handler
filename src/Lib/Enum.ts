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
