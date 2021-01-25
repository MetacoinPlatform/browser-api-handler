/// <reference types="chrome" />
/// <reference types="node" />
import { EventEmitter } from 'events';
export interface iTabInfo {
    id: number | null;
    index: number;
    status: string | null;
    title: string | null;
    host: string;
    origin: string | null;
    favIcon: string | null;
    windowId: number;
}
interface tabResult {
    tab: chrome.tabs.Tab | null;
    info: iTabInfo | null;
}
export interface iTabsEvent {
    getInfo(tab: chrome.tabs.Tab): iTabInfo;
    getTab(tabId: number): Promise<tabResult>;
    getTabIndex(index: number, options: chrome.tabs.QueryInfo | null): Promise<tabResult>;
    getTabs(options: chrome.tabs.QueryInfo | null): Promise<tabResult[]>;
    getActiveTab(index: number): Promise<tabResult>;
    getItems(): Promise<{
        [tabId: string]: {
            info: iTabInfo;
        };
    }>;
    getActiveItem(): Promise<tabResult | null>;
    onActivated(callback: (tab: chrome.tabs.Tab, info: iTabInfo) => void, key: string): iTabsEvent;
    removeActivated(key: string): iTabsEvent;
    onUpdated(callback: (tab: chrome.tabs.Tab, info: iTabInfo) => void, key: string): iTabsEvent;
    removeUpdated(key: string): iTabsEvent;
    onRemoved(callback: (tabId: number) => void, key: string): iTabsEvent;
    removeRemoved(key: string): iTabsEvent;
}
export declare class tabsEvent extends EventEmitter implements iTabsEvent, EventEmitter {
    static instance: tabsEvent;
    private tabs;
    private activeId;
    private tabItems;
    private eventsFlagMap;
    private eventsMap;
    constructor();
    private init;
    getInfo(tab: chrome.tabs.Tab): iTabInfo;
    getTab(tabId: number): Promise<tabResult>;
    getTabIndex(index?: number, options?: chrome.tabs.QueryInfo | null): Promise<tabResult>;
    getActiveTab(index?: number): Promise<tabResult>;
    getItems(): Promise<{
        [tabId: string]: {
            info: iTabInfo;
        };
    }>;
    getActiveItem(): Promise<tabResult | null>;
    getTabs(options?: chrome.tabs.QueryInfo | null): Promise<tabResult[]>;
    onActivated(callback: (tab: chrome.tabs.Tab, info: iTabInfo) => void, key?: string): tabsEvent;
    removeActivated(key?: string): tabsEvent;
    onUpdated(callback: (tab: chrome.tabs.Tab, info: iTabInfo) => void, key?: string): tabsEvent;
    removeUpdated(key?: string): tabsEvent;
    onRemoved(callback: (tabId: number) => void, key?: string): tabsEvent;
    removeRemoved(key?: string): tabsEvent;
}
declare const _default: () => tabsEvent;
export default _default;
