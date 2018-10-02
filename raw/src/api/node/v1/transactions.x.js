"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts_api_validator_1 = require("ts-api-validator");
var schemaFields_1 = require("../../schemaFields");
exports.massTransferSchema = new ts_api_validator_1.Schema({
    type: ts_api_validator_1.ObjectPart,
    required: true,
    content: {
        senderPublicKey: schemaFields_1.default.publicKey,
        assetId: schemaFields_1.default.assetId,
        transfers: {
            type: ts_api_validator_1.ArrayPart,
            content: {
                type: ts_api_validator_1.ObjectPart,
                required: true,
                content: {
                    recipient: schemaFields_1.default.recipient,
                    amount: {
                        type: ts_api_validator_1.NumberPart,
                        required: true
                    }
                }
            },
            defaultValue: []
        },
        timestamp: schemaFields_1.default.timestamp,
        fee: schemaFields_1.default.fee,
        attachment: {
            // TODO : make it possible to pass a byte array
            type: ts_api_validator_1.StringPart,
            required: false,
            defaultValue: ''
        }
    }
});
//# sourceMappingURL=transactions.x.js.map