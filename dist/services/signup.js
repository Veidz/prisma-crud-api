"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpService = void 0;
const errors_1 = require("../errors");
const signup_validations_1 = require("../validations/signup-validations");
const repository_1 = require("../repository");
class SignUpService {
    validators;
    constructor(validators = new signup_validations_1.SignUpValidations()) {
        this.validators = validators;
    }
    async create(userPayload) {
        const requiredFields = ['name', 'email', 'password', 'passwordConfirmation'];
        for (const field of requiredFields) {
            if (!userPayload[field])
                throw new errors_1.BadRequest(`${field} is required`);
        }
        const { name, email, password, passwordConfirmation } = userPayload;
        if (!this.validators.isNameValid(name))
            throw new errors_1.BadRequest('Invalid name');
        if (!this.validators.isEmailValid(email))
            throw new errors_1.BadRequest('Invalid email');
        if (!this.validators.isPasswordValid(password))
            throw new errors_1.BadRequest('Invalid password');
        if (password !== passwordConfirmation)
            throw new errors_1.BadRequest('Invalid passwordConfirmation');
        const userPayloadDB = { name, email, password };
        const userExists = await (0, repository_1.findUnique)(email);
        if (userExists)
            throw new errors_1.Conflit('User already registered');
        await (0, repository_1.create)(userPayloadDB);
    }
}
exports.SignUpService = SignUpService;
