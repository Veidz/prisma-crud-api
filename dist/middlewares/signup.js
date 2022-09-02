"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = void 0;
const signup_1 = require("../controllers/signup");
const signUpController = new signup_1.SignUpController();
exports.signUp = {
    async create(req, res) { await signUpController.create(req, res); }
};
