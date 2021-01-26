/// <reference types="chrome" />
interface iAlarms {
    create(name: string, options: chrome.alarms.AlarmCreateInfo): any;
    addListener(name: string, callback: (id: string, alarm: chrome.alarms.Alarm) => void): any;
    removeListener(name: string, id: string): any;
    removeListeners(name: string): any;
    clear(name: string): any;
}
export declare class Alarms implements iAlarms {
    private alarm;
    private eventMap;
    constructor();
    create(name: string, options: chrome.alarms.AlarmCreateInfo): Alarms;
    addListener(name: string, callback: (id: string, alarm: chrome.alarms.Alarm) => void): Alarms;
    removeListener(name: string, id: string): Alarms;
    removeListeners(name: string): Alarms;
    clear(name: string): Alarms;
    clearAll(): Alarms;
}
declare const _default: Alarms;
export default _default;
