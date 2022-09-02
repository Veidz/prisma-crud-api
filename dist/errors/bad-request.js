"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequest = void 0;
class BadRequest extends Error {
    status;
    message;
    constructor(message) {
        super();
        this.status = 400;
        this.message = message;
    }
}
exports.BadRequest = BadRequest;
