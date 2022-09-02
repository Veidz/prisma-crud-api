"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMany = void 0;
const client_1 = __importDefault(require("../database/client"));
const findMany = async () => {
    try {
        const users = await client_1.default.users.findMany();
        return users;
    }
    catch (error) {
        console.error(error);
        await client_1.default.$disconnect();
    }
};
exports.findMany = findMany;
