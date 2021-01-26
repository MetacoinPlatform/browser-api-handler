/// <reference types="chrome" />
/// <reference types="node" />
import { EventEmitter } from 'events';
export interface iWindows {
    get(name: string): chrome.windows.Window | null;
    getId(id: number, callback: (win: chrome.windows.Window) => void): void;
    getAll(callback: (wins: chrome.windows.Window[]) => void): void;
    open(name: string, options: chrome.windows.CreateData, isOnce?: boolean): any;
    update(id: number, info: chrome.windows.UpdateInfo, callback: ((window: chrome.windows.Window) => void) | undefined): void;
    close(windowId: number): any;
}
export declare class windows extends EventEmitter implements iWindows, EventEmitter {
    private window;
    private isAddEvent;
    constructor();
    get(name: string): chrome.windows.Window | null;
    getId(id: number, callback: (win: chrome.windows.Window) => void): void;
    getAll(callback: (wins: chrome.windows.Window[]) => void): void;
    open(name: string, options: chrome.windows.CreateData, isOnce?: boolean): void;
    update(id: number, info: chrome.windows.UpdateInfo, callback: ((window: chrome.windows.Window) => void) | undefined): void;
    close(id: number): void;
}
declare const _default: windows;
export default _default;
