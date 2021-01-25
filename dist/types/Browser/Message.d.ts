/// <reference types="chrome" />
import { ENUM_STATUS } from '../Lib/Enum';
interface iOnCallbackFunction {
    method: string | null;
    param: any;
    sendResult: (result: ENUM_STATUS, msg: any, data: any) => any;
}
declare type onCallbackFunction = (data: iOnCallbackFunction & {
    oriParam: any;
    sender: chrome.runtime.MessageSender;
}) => void;
export interface iMessage {
    send(method: string, param?: any, isEncrypt?: boolean): Promise<any>;
    sendTab(tabId: number, method: string, param?: any, isEncrypt?: boolean): Promise<any>;
    on(callback: onCallbackFunction, extId?: string): object | null;
    onExternal(callback: onCallbackFunction, extId?: string): object | null;
}
export declare class message implements iMessage {
    static instance: message;
    private runtime;
    private tabs;
    constructor();
    send(method: string, param?: any, isEncrypt?: boolean): Promise<any>;
    sendTab(tabId: number, method: string, param?: any, isEncrypt?: boolean): Promise<any>;
    on(callback: onCallbackFunction, extId?: string): object | null;
    onExternal(callback: onCallbackFunction, extId?: string): object | null;
}
declare const _default: message;
export default _default;
