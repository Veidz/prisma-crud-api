"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpValidations = void 0;
const email_validator_1 = __importDefault(require("email-validator"));
class SignUpValidations {
    isNameValid(name) {
        if (name.length < 4)
            return false;
        if (name.match(/\d+/g))
            return false;
        return true;
    }
    isEmailValid(email) {
        return email_validator_1.default.validate(email);
    }
    isPasswordValid(password) {
        if (password.length < 6)
            return false;
        return true;
    }
}
exports.SignUpValidations = SignUpValidations;
