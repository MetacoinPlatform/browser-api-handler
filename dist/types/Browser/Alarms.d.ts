/// <reference types="chrome" />
interface iAlarms {
    create(name: string, options: chrome.alarms.AlarmCreateInfo): any;
    addListener(name: string, callback: (id: string, alarm: chrome.alarms.Alarm) => void): any;
    removeListener(name: string, id: string): any;
    removeListeners(name: string): any;
    clear(name: string): void;
}
declare class alarms implements iAlarms {
    static instance: alarms;
    private alarm;
    private eventMap;
    constructor();
    create(name: string, options: chrome.alarms.AlarmCreateInfo): this;
    addListener(name: string, callback: (id: string, alarm: chrome.alarms.Alarm) => void): this;
    removeListener(name: string, id: string): this;
    removeListeners(name: string): this;
    clear(name: string): this;
    clearAll(): this;
}
declare const _default: alarms;
export default _default;
