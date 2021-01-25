import runtime from './Browser/Runtime'
import message from './Browser/Message'
import port from './Browser/Port'
import alarms from './Browser/Alarms'
import notify from './Browser/Notify'
import tabs from './Browser/Tabs'
import storage from './Browser/Storage'

import type {iRuntimeEvent} from './Browser/Runtime'
import type {iMessage} from './Browser/Message'
import type {iPort} from './Browser/Port'
import type {iAlarms} from './Browser/Alarms'
import type {iNotify} from './Browser/Notify'
import type {iTabsEvent} from './Browser/Tabs'
import type {iStorage} from './Browser/Storage'

export interface iBrowserEvt {
	runtime: iRuntimeEvent
	message: iMessage
	port: iPort
	alarms: iAlarms
	notify: iNotify
	tabs: () => iTabsEvent
	storage: iStorage
}

const BrowserEvt: iBrowserEvt = {
	runtime,
	message,
	port,
	alarms,
	notify,
	tabs,
	storage,
}

export default BrowserEvt
