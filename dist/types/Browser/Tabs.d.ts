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
declare class tabs extends EventEmitter implements iTabs, EventEmitter {
    static instance: tabs;
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
    onActivated(callback: (tab: chrome.tabs.Tab, info: iTabInfo) => void, key?: string): tabs;
    removeActivated(key?: string): tabs;
    onUpdated(callback: (tab: chrome.tabs.Tab, info: iTabInfo) => void, key?: string): tabs;
    removeUpdated(key?: string): tabs;
    onRemoved(callback: (tabId: number) => void, key?: string): tabs;
    removeRemoved(key?: string): tabs;
}
declare const tabsCtrl: tabs;
export default tabsCtrl;
