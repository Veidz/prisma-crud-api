"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const errors_1 = require("../errors");
const repository_1 = require("../repository");
class UsersService {
    async findMany() {
        const users = await (0, repository_1.findMany)();
        if (!users.length)
            throw new errors_1.NotFound('No users in the database');
        const usersWithoutPassword = [];
        for (const user of users) {
            const { id, password, created_at: createdAt, updated_at: updatedAt, ...rest } = user;
            usersWithoutPassword.push(rest);
        }
        return usersWithoutPassword;
    }
    async findByEmail(email) {
        if (!email)
            throw new errors_1.BadRequest('No email provided');
        const user = await (0, repository_1.findUnique)(email);
        if (!user)
            throw new errors_1.NotFound('No user found');
        const { id, password, created_at: createdAt, updated_at: updatedAt, ...rest } = user;
        const userWithoutPassword = rest;
        return userWithoutPassword;
    }
    async updateName(name, email) {
        if (!name)
            throw new errors_1.BadRequest('No name provided');
        if (!email)
            throw new errors_1.BadRequest('No email provided');
        const user = await (0, repository_1.findUnique)(email);
        if (!user)
            throw new errors_1.NotFound('No user found');
        await (0, repository_1.updateName)(name, email);
    }
    async exclude(email) {
        if (!email)
            throw new errors_1.BadRequest('No email provided');
        const user = await (0, repository_1.findUnique)(email);
        if (!user)
            throw new errors_1.NotFound('No user found');
        await (0, repository_1.exclude)(email);
    }
}
exports.UsersService = UsersService;
