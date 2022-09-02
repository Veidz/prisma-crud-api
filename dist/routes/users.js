"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoute = void 0;
const express_1 = require("express");
const users_1 = require("../middlewares/users");
const usersRoute = (0, express_1.Router)();
exports.usersRoute = usersRoute;
usersRoute.get('/users', users_1.users.findMany);
usersRoute.get('/users/:email', users_1.users.findByEmail);
usersRoute.put('/users/:email', users_1.users.updateName);
usersRoute.delete('/users/:email', users_1.users.exclude);