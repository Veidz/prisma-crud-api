"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const users_1 = require("../services/users");
class UsersController {
    service;
    constructor() {
        this.service = new users_1.UsersService();
    }
    async findMany(_req, res) {
        try {
            const users = await this.service.findMany();
            return res.status(200).json(users);
        }
        catch (error) {
            return res.status(error.status).json({ message: error.message });
        }
    }
    async findByEmail(req, res) {
        try {
            const user = await this.service.findByEmail(req.params.email);
            return res.status(200).json(user);
        }
        catch (error) {
            return res.status(error.status).json({ message: error.message });
        }
    }
    async updateName(req, res) {
        try {
            await this.service.updateName(req.body.name, req.params.email);
            return res.status(200).json('Name successfully updated');
        }
        catch (error) {
            return res.status(error.status).json({ message: error.message });
        }
    }
    async exclude(req, res) {
        try {
            await this.service.exclude(req.params.email);
            return res.status(200).json('User successfully deleted');
        }
        catch (error) {
            return res.status(error.status).json({ message: error.message });
        }
    }
}
exports.UsersController = UsersController;
