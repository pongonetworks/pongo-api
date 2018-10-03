import { TBuffer } from '../../interfaces';
import BigNumber from '../libs/bignumber';
declare const _default: {
    booleanToBytes(input: boolean): number[];
    bytesToByteArrayWithSize(input: TBuffer): number[];
    shortToByteArray(input: number): number[];
    longToByteArray(input: number): number[];
    bigNumberToByteArray(input: BigNumber): number[];
    stringToByteArray(input: string): number[];
    stringToByteArrayWithSize(input: string): number[];
};
export default _default;
