import { ENUM_STATUS } from './Enum';
export declare const createResult: (result: ENUM_STATUS | string, msg?: string, data?: any) => object;
export declare const makeid: (length: number, isMs?: boolean) => string;
export declare const encryptValue: (id: string | number, param: any) => Promise<Object | null>;
export declare const decryptValue: (id: string | number, data: any) => Promise<Object | null>;
