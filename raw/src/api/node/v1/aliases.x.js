"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts_api_validator_1 = require("ts-api-validator");
var remap_1 = require("../../../utils/remap");
var schemaFields_1 = require("../../schemaFields");
exports.createAliasSchema = new ts_api_validator_1.Schema({
    type: ts_api_validator_1.ObjectPart,
    required: true,
    content: {
        senderPublicKey: schemaFields_1.default.publicKey,
        alias: {
            type: ts_api_validator_1.StringPart,
            required: true,
            parseValue: remap_1.removeAliasPrefix
        },
        fee: schemaFields_1.default.fee,
        timestamp: schemaFields_1.default.timestamp
    }
});
//# sourceMappingURL=aliases.x.js.map