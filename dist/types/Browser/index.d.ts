/// <reference types="node" />
import runtime from './Runtime';
import message from './Message';
import port from './Port';
import alarms from './Alarms';
import notify from './Notify';
import tabs from './Tabs';
import storage from './Storage';
import type { iRuntime } from './Runtime';
import type { iMessage } from './Message';
import type { iPort } from './Port';
import type { iAlarms } from './Alarms';
import type { iNotify } from './Notify';
import type { iTabs } from './Tabs';
import type { iStorage } from './Storage';
import { EventEmitter } from 'events';
export interface iBrowser {
    runtime: iRuntime;
    message: iMessage;
    port: iPort;
    alarms: iAlarms;
    notify: iNotify;
    tabs: iTabs;
    storage: iStorage & EventEmitter;
}
export { runtime, message, port, alarms, notify, tabs, storage };
