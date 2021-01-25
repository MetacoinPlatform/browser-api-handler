import type { iRuntimeEvent } from './Browser/Runtime';
import type { iMessage } from './Browser/Message';
import type { iPort } from './Browser/Port';
import type { iAlarms } from './Browser/Alarms';
import type { iNotify } from './Browser/Notify';
import type { iTabsEvent } from './Browser/Tabs';
import type { iStorage } from './Browser/Storage';
export interface iBrowserEvt {
    runtime: iRuntimeEvent;
    message: iMessage;
    port: iPort;
    alarms: iAlarms;
    notify: iNotify;
    tabs: () => iTabsEvent;
    storage: iStorage;
}
