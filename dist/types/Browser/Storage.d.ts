/// <reference types="node" />
import { EventEmitter } from 'events';
import { ENUM_STORAGE } from '../Lib/Enum';
export interface iStorage {
    changeType(type: ENUM_STORAGE): iStorage;
    save(key: string | number, val: any): Promise<void>;
    load(key: string | number): Promise<any>;
    remove(key: string | number): Promise<any>;
}
declare class Storage extends EventEmitter implements iStorage, EventEmitter {
    static instance: Storage;
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
declare const StorageInstance: Storage;
export default StorageInstance;
