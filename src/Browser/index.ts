import runtime from './Runtime'
import message from './Message'
import alarms from './Alarms'
import notify from './Notify'
import tabs from './Tabs'

import type {iRuntimeEvent} from './Runtime'
import type {iAlarms} from './Alarms'
import type {iNotifyEvent} from './Notify'
import type {iTabsEvent} from './Tabs'
import type { iMessageEvent } from './Message'

export interface iChromeEvt {
	runtime: iRuntimeEvent
	message: iMessageEvent
	alarms: iAlarms
	notify: iNotifyEvent
	tabs: () => iTabsEvent
}

const ChromeEvt: iChromeEvt = {
	runtime,
	message,
	alarms,
	notify,
	tabs,
}

export default ChromeEvt
