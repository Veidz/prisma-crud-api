"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const client_1 = __importDefault(require("../database/client"));
const create = async (userPayload) => {
    try {
        const user = await client_1.default.users.create({ data: userPayload });
        return user;
    }
    catch (error) {
        console.error(error);
        await client_1.default.$disconnect();
    }
};
exports.create = create;
