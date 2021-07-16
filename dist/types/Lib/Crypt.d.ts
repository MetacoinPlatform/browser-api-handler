/// <reference types="node" />
export declare const Hash: (type: string, txt: string | number) => string;
export declare const HashHmac: (text: string | Buffer, secret: string, algorithm?: string, isHex?: boolean) => any | string | Buffer;
export declare const encryptData: (text: string | number, salt: string) => string;
export declare const decryptData: (encryptData: string | number, salt: string) => string;
declare const _default: {
    Hash: (type: string, txt: string | number) => string;
    HashHmac: (text: string | Buffer, secret: string, algorithm?: string, isHex?: boolean) => any;
    encryptData: (text: string | number, salt: string) => string;
    decryptData: (encryptData: string | number, salt: string) => string;
};
export default _default;
