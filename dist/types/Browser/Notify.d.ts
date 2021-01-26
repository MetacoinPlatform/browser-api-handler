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
export declare class Notify implements iNotify {
    private notify;
    private notifyMap;
    constructor();
    private setupNotifyOption;
    setOptions(id: string, options?: chrome.notifications.NotificationOptions): Notify;
    onClicked(id: string, callback: (notificationId: string) => void): Notify;
    removeClicked(id: string): Notify;
    onClosed(id: string, callback: (notificationId: string, byUser: boolean) => void): Notify;
    removeClosed(id: string): Notify;
    onButtonClicked(id: string, callback: (notificationId: string, buttonIndex: number) => void): Notify;
    removeButtonClicked(id: string): Notify;
    onPermissionChanged(id: string, callback: (level: string) => void): Notify;
    removePermissionChanged(id: string): Notify;
    create(id: string, options?: chrome.notifications.NotificationOptions): Promise<string>;
    update(id: string, options?: chrome.notifications.NotificationOptions): Promise<boolean>;
    getAll(): Promise<Object>;
}
declare const _default: Notify;
export default _default;
