"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.docsRoute = void 0;
const express_1 = require("express");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("../config/swagger.json"));
const docsRoute = (0, express_1.Router)();
exports.docsRoute = docsRoute;
docsRoute.use('/api-docs', swagger_ui_express_1.default.serve);
docsRoute.get('/api-docs', swagger_ui_express_1.default.setup(swagger_json_1.default));
