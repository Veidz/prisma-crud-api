"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateName = void 0;
const client_1 = __importDefault(require("../database/client"));
const updateName = async (name, email) => {
    try {
        const updatedUser = await client_1.default.users.update({
            where: { email },
            data: { name }
        });
        return updatedUser;
    }
    catch (error) {
        console.error(error);
        await client_1.default.$disconnect();
    }
};
exports.updateName = updateName;
