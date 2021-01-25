declare type eventFunction = ({ key: string, data: any, App: AppController, Store: StoreController }: {
    key: any;
    data: any;
    App: any;
    Store: any;
}) => void;
export interface iRuntimeEvent {
    onInstalled(callback: eventFunction, key: string): void;
    removeInstalled(key: string): void;
    onConnect(callback: eventFunction, key: string): void;
    removeConnect(key: string): void;
    onConnectExternal(callback: eventFunction, key: string): void;
    removeConnectExternal(key: string): void;
    onCommand(callback: eventFunction, key: string): void;
    removeCommand(key: string): void;
}
export declare class runtimeEvent implements iRuntimeEvent {
    static instance: runtimeEvent;
    private runtime;
    private commands;
    private eventsFlagMap;
    private eventsMap;
    constructor();
    private eventFunction;
    private removeEventFunction;
    onInstalled(callback: eventFunction, key?: string): void;
    removeInstalled(key: string): void;
    onConnect(callback: Function, key?: string): void;
    removeConnect(key: string): void;
    onConnectExternal(callback: eventFunction, key?: string): void;
    removeConnectExternal(key: string): void;
    onCommand(callback: Function, key?: string): void;
    removeCommand(key: string): void;
}
declare const _default: runtimeEvent;
export default _default;
