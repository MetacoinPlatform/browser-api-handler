/// <reference types="node" />
import { EventEmitter } from 'events';
interface iEventData {
    name: string;
    method: string;
    data: any;
    event: WindowEventHandlers;
    sendResult: (data: any) => void | null;
}
interface iResonse {
    __id__: string | number;
    name: string;
    method: string;
    status: string | symbol | EMIT_TYPE;
    msg?: any;
    data?: any;
}
declare enum EMIT_TYPE {
    LOAD = "load",
    MESSAGE = "message",
    REMOVE = "remove"
}
interface iWindowMsgEvent {
    shouldWindow(): boolean;
    on(event: string | symbol | EMIT_TYPE, listener: (data: iEventData, ...args: any[]) => void): any;
    setTimeout(ms: number): any;
    send(method: string, param?: any, response?: ((data: iResonse) => void) | null): void;
}
export declare class windowMsg extends EventEmitter implements iWindowMsgEvent, EventEmitter {
    private isRun;
    private replay;
    private __id__;
    private __timeout__;
    private name;
    private recvName;
    constructor(name: string, recvName: string);
    shouldWindow(): boolean;
    private doctypeCheck;
    private suffixCheck;
    private documentElementCheck;
    setupEvent(): Promise<void>;
    setTimeout(ms?: number): windowMsg;
    send(method: string, param: any, response: ((data: iResonse) => void) | null): void;
}
declare const _default: (name: string, recvName: string) => windowMsg;
export default _default;
