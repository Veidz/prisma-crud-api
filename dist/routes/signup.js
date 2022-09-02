"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpRoute = void 0;
const express_1 = require("express");
const signup_1 = require("../middlewares/signup");
const signUpRoute = (0, express_1.Router)();
exports.signUpRoute = signUpRoute;
signUpRoute.post('/signup', signup_1.signUp.create);
