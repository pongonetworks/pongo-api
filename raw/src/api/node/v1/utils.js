"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("../../../utils/request");
var fetch = request_1.createFetchWrapper(0 /* NODE */, 0 /* V1 */, request_1.processJSON);
exports.default = {
    time: function () {
        return fetch("/utils/time").then(function (t) { return t.system; });
    }
};
//# sourceMappingURL=utils.js.map