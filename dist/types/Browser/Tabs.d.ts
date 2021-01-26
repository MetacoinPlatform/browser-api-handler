/// <reference types="chrome" />
/// <reference types="node" />
import { EventEmitter } from 'events';
interface iTabInfo {
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
interface iTabs {
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
    onActivated(callback: (tab: chrome.tabs.Tab, info: iTabInfo) => void, key: string): iTabs;
    removeActivated(key: string): iTabs;
    onUpdated(callback: (tab: chrome.tabs.Tab, info: iTabInfo) => void, key: string): iTabs;
    removeUpdated(key: string): iTabs;
    onRemoved(callback: (tabId: number) => void, key: string): iTabs;
    removeRemoved(key: string): iTabs;
}
export declare class Tabs extends EventEmitter implements iTabs, EventEmitter {
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
    onActivated(callback: (tab: chrome.tabs.Tab, info: iTabInfo) => void, key?: string): Tabs;
    removeActivated(key?: string): Tabs;
    onUpdated(callback: (tab: chrome.tabs.Tab, info: iTabInfo) => void, key?: string): Tabs;
    removeUpdated(key?: string): Tabs;
    onRemoved(callback: (tabId: number) => void, key?: string): Tabs;
    removeRemoved(key?: string): Tabs;
}
declare const _default: () => Tabs;
export default _default;
