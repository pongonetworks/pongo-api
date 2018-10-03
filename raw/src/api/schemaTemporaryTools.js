"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function stub(partType) {
    if (partType === 'string') {
        return function () { return '[recipient address will be here when the API v2 is implemented]'; };
    }
    else if (partType === 'number') {
        return function () { return -1; };
    }
    else {
        throw new Error("No stub for the \"" + partType + "\" type of part");
    }
}
exports.stub = stub;
function stringConversion(n) {
    var type = typeof n;
    switch (type) {
        case 'number':
            return String(n);
        case 'string':
            return n;
        default:
            return null;
    }
}
exports.stringConversion = stringConversion;
//# sourceMappingURL=schemaTemporaryTools.js.map