import { siftTransaction } from './api/schemaTools';
declare const _default: {
    getAddressFromPublicKey(publicKey: string): string;
    calculateTimeDiff(nodeTime: any, userTime: any): number;
    base58: {
        encode: (buffer: import("interfaces").TBuffer) => string;
        decode: (string: any) => Uint8Array;
    };
    siftTransaction: typeof siftTransaction;
};
export default _default;
