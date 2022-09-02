"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFound = void 0;
class NotFound extends Error {
    status;
    message;
    constructor(message) {
        super();
        this.status = 404;
        this.message = message;
    }
}
exports.NotFound = NotFound;
