"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exclude = void 0;
const client_1 = __importDefault(require("../database/client"));
const exclude = async (email) => {
    try {
        await client_1.default.users.delete({ where: { email } });
    }
    catch (error) {
        console.error(error);
        await client_1.default.$disconnect();
    }
};
exports.exclude = exclude;
