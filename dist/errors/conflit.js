"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conflit = void 0;
class Conflit extends Error {
    status;
    message;
    constructor(message) {
        super();
        this.status = 409;
        this.message = message;
    }
}
exports.Conflit = Conflit;
