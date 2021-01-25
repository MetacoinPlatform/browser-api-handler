/// <reference types="chrome" />
interface iNotify {
    setOptions(id: string, options?: chrome.notifications.NotificationOptions): any;
    onClicked(id: string, callback: (notificationId: string) => void): any;
    removeClicked(id: string): any;
    onClosed(id: string, callback: (notificationId: string, byUser: boolean) => void): any;
    removeClosed(id: string): any;
    onButtonClicked(id: string, callback: (notificationId: string, buttonIndex: number) => void): any;
    removeButtonClicked(id: string): any;
    onPermissionChanged(id: string, callback: (level: string) => void): any;
    removePermissionChanged(id: string): any;
    create(id: string, options?: chrome.notifications.NotificationOptions): Promise<string>;
    update(id: string, options?: chrome.notifications.NotificationOptions): Promise<boolean>;
    getAll(): Promise<Object>;
}
declare class notify implements iNotify {
    static instance: notify;
    private notify;
    private notifyMap;
    constructor();
    private setupNotifyOption;
    setOptions(id: string, options?: chrome.notifications.NotificationOptions): this;
    onClicked(id: string, callback: (notificationId: string) => void): this;
    removeClicked(id: string): this;
    onClosed(id: string, callback: (notificationId: string, byUser: boolean) => void): this;
    removeClosed(id: string): this;
    onButtonClicked(id: string, callback: (notificationId: string, buttonIndex: number) => void): this;
    removeButtonClicked(id: string): this;
    onPermissionChanged(id: string, callback: (level: string) => void): this;
    removePermissionChanged(id: string): this;
    create(id: string, options?: chrome.notifications.NotificationOptions): Promise<string>;
    update(id: string, options?: chrome.notifications.NotificationOptions): Promise<boolean>;
    getAll(): Promise<Object>;
}
declare const _default: notify;
export default _default;
