/// <reference types="chrome" />
import { ENUM_STATUS } from '../Lib/Enum';
interface iOnCallbackFunction {
    method: string | null;
    param: any;
    oriParam: any;
    sender: chrome.runtime.MessageSender;
    sendResult: (result: ENUM_STATUS, msg: any, data: any) => any;
    send: (data: {
        [key: string]: any;
    }) => any;
}
interface iMessage {
    send(method: string, param?: any, isEncrypt?: boolean): Promise<any>;
    sendTab(tabId: number, method: string, param?: any, isEncrypt?: boolean): Promise<any>;
    on(callback: (data: iOnCallbackFunction) => void, extId?: string): object | null;
    onExternal(callback: (data: iOnCallbackFunction) => void, extId?: string): object | null;
}
export declare class Message implements iMessage {
    private runtime;
    private tabs;
    constructor();
    send(method: string, param?: any, isEncrypt?: boolean): Promise<any>;
    sendTab(tabId: number, method: string, param?: any, isEncrypt?: boolean): Promise<any>;
    on(callback: (data: iOnCallbackFunction) => void, extId?: string): object | null;
    onExternal(callback: (data: iOnCallbackFunction) => void, extId?: string): object | null;
}
declare const _default: Message;
export default _default;
