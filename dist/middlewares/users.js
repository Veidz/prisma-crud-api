"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const users_1 = require("../controllers/users");
const usersController = new users_1.UsersController();
exports.users = {
    async findMany(req, res) { await usersController.findMany(req, res); },
    async findByEmail(req, res) { await usersController.findByEmail(req, res); },
    async updateName(req, res) { await usersController.updateName(req, res); },
    async exclude(req, res) { await usersController.exclude(req, res); }
};
