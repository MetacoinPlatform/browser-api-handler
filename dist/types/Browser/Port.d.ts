/// <reference types="chrome" />
import { ENUM_STATUS } from '../Lib/Enum';
interface iPortCallbackFunction {
    port: chrome.runtime.Port;
    method: string | null;
    param: any;
    sendResult: (result: ENUM_STATUS, msg: any, resData: any) => any;
}
declare type portCallbackFunction = (data: iPortCallbackFunction & {
    oriParam: any;
}) => void;
interface iPort {
    setTimeout(ms: number): any;
    connect(name: string): chrome.runtime.Port | null;
    disConnect(name: string): Boolean;
    onDisconnect(name: string, callback: (port: chrome.runtime.Port) => void): any;
    send(name: string, method: string, param?: any, isEncrypt?: boolean, response?: Function | null): void;
    on(name: string, callback: portCallbackFunction): void;
}
export declare class Port implements iPort {
    private portMap;
    private __id__;
    private __timeout__;
    private runtime;
    constructor();
    setTimeout(ms?: number): Port;
    connect(name: string): chrome.runtime.Port | null;
    disConnect(name: string): Boolean;
    onDisconnect(name: string, callback: (port: chrome.runtime.Port) => void): Port;
    send(name: string, method: string, param?: any, isEncrypt?: boolean, response?: Function | null): Promise<void>;
    on(name: string, callback: portCallbackFunction): {
        removeListener: () => void;
    } | undefined;
}
declare const _default: Port;
export default _default;
