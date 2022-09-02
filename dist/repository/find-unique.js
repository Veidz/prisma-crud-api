"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUnique = void 0;
const client_1 = __importDefault(require("../database/client"));
const findUnique = async (userEmail) => {
    try {
        const userExists = await client_1.default.users.findUnique({
            where: { email: userEmail }
        });
        return userExists;
    }
    catch (error) {
        console.error(error);
        await client_1.default.$disconnect();
    }
};
exports.findUnique = findUnique;
