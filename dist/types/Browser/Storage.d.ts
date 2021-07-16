/// <reference types="node" />
import { EventEmitter } from 'events';
import { ENUM_STORAGE } from '../Lib/Enum';
interface iStorage {
    changeType(type: ENUM_STORAGE): iStorage;
    save(key: string | number, val: any): Promise<void>;
    load(key: string | number): Promise<any>;
    remove(key: string | number): Promise<any>;
}
export declare class Storage extends EventEmitter implements iStorage, EventEmitter {
    private storageType;
    private supportStorage;
    private storage;
    constructor();
    changeType(type: ENUM_STORAGE): Storage;
    save(key: string | number, val: any): Promise<void>;
    load(key: string | number): Promise<any>;
    remove(key: string | number): Promise<any>;
    loadRemove(key: string): Promise<any>;
}
declare const _default: Storage;
export default _default;
