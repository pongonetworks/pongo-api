"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("../../../utils/request");
var remap_1 = require("../../../utils/remap");
var transactions_x_1 = require("./transactions.x");
var constants_1 = require("../../../constants");
var Transactions_1 = require("../../../classes/Transactions");
var config_1 = require("../../../config");
var fetch = request_1.createFetchWrapper(0 /* NODE */, 0 /* V1 */, request_1.processJSON);
var preMassTransferAsync = function (data) { return transactions_x_1.massTransferSchema.parse(data); };
var postMassTransfer = remap_1.createRemapper({
    transactionType: null,
    assetId: remap_1.normalizeAssetId
});
exports.default = {
    get: function (id) {
        if (id === constants_1.WAVES) {
            return Promise.resolve(constants_1.WAVES_V1_ISSUE_TX);
        }
        else {
            return fetch("/transactions/info/" + id);
        }
    },
    getList: function (address, limit) {
        if (limit === void 0) { limit = config_1.default.getRequestParams().limit; }
        // In the end of the line a strange response artifact is handled
        return fetch("/transactions/address/" + address + "/limit/" + limit).then(function (array) { return array[0]; });
    },
    utxSize: function () {
        return fetch('/transactions/unconfirmed/size');
    },
    utxGet: function (id) {
        return fetch("/transactions/unconfirmed/info/" + id);
    },
    utxGetList: function () {
        return fetch('/transactions/unconfirmed');
    },
    massTransfer: request_1.wrapTransactionRequest(Transactions_1.default.MassTransferTransaction, preMassTransferAsync, postMassTransfer, function (postParams) {
        return fetch('/transactions/broadcast', postParams);
    })
};
//# sourceMappingURL=transactions.js.map