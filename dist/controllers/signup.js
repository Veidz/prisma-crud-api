"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpController = void 0;
const signup_1 = require("../services/signup");
class SignUpController {
    service;
    constructor() {
        this.service = new signup_1.SignUpService();
    }
    async create(req, res) {
        try {
            await this.service.create(req.body);
            return res.status(201).json({ message: 'User successfully created' });
        }
        catch (error) {
            return res.status(error.status).json({ message: error.message });
        }
    }
}
exports.SignUpController = SignUpController;
