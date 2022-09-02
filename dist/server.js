"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./config/app");
require("dotenv/config");
const PORT = process.env.APP_PORT ?? 3001;
new app_1.App().start(PORT);
