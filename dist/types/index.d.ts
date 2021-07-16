import * as crypt from './Lib/Crypt';
declare const _default: {
    runtime: import("./Browser/Runtime").Runtime;
    message: import("./Browser/Message").Message;
    port: import("./Browser/Port").Port;
    alarms: import("./Browser/Alarms").Alarms;
    notify: import("./Browser/Notify").Notify;
    tabs: () => import("./Browser/Tabs").Tabs;
    storage: import("./Browser/Storage").Storage;
    window: import("./Browser/Window").windows;
    windowMessage: (name: string, recvName: string) => import("./Browser/WindowMessage").windowMsg;
    crypt: typeof crypt;
};
export default _default;
