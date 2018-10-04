import { BooleanPart, NumberPart, StringPart } from 'ts-api-validator';
import { getTimestamp, removeRecipientPrefix } from '../utils/remap';
declare const _default: {
    publicKey: {
        type: typeof StringPart;
        required: boolean;
    };
    assetId: {
        type: typeof StringPart;
        required: boolean;
    };
    fee: {
        type: typeof NumberPart;
        required: boolean;
        defaultValue: number;
    };
    issueFee: {
        type: typeof NumberPart;
        required: boolean;
        defaultValue: number;
    };
    matcherFee: {
        type: typeof NumberPart;
        required: boolean;
        defaultValue: number;
    };
    recipient: {
        type: typeof StringPart;
        required: boolean;
        parseValue: typeof removeRecipientPrefix;
    };
    reissuable: {
        type: typeof BooleanPart;
        required: boolean;
        defaultValue: boolean;
    };
    timestamp: {
        type: typeof NumberPart;
        required: boolean;
        parseValue: typeof getTimestamp;
    };
};
export default _default;
