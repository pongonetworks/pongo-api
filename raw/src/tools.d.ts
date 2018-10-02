declare const _default: {
    getAddressFromPublicKey(publicKey: string): string;
    calculateTimeDiff(nodeTime: any, userTime: any): number;
    base58: {
        encode: (buffer: number[] | Uint8Array) => string;
        decode: (string: any) => Uint8Array;
    };
    siftTransaction: (tx: any) => Promise<any>;
};
export default _default;
