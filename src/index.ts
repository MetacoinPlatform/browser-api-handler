import runtime from './Browser/Runtime'
import message from './Browser/Message'
import port from './Browser/Port'
import notify from './Browser/Notify'
import alarms from './Browser/Alarms'
import tabs from './Browser/Tabs'
import storage from './Browser/Storage'
import window from './Browser/Window'
import windowMessage from './Browser/WindowMessage'

import * as crypt from './Lib/Crypt'

export default {
	runtime,
	message,
	port,
	alarms,
	notify,
	tabs,
	storage,
	window,
	windowMessage,
	crypt
}