"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const UserEntity_1 = __importDefault(require("../entity/UserEntity"));
const UserRoute = (0, express_1.Router)();
const User = new UserEntity_1.default();
UserRoute.get('/users', (req, res, next) => {
    const message = "Lista de Usuários";
    console.log(message);
    res.status(http_status_codes_1.default.OK).send(message);
    const UsersList = User.ListAll;
    console.log("____________________");
    console.log(UsersList);
    res.status(http_status_codes_1.default.OK).send(UsersList);
});
UserRoute.post('/users/add', (req, res, next) => {
    // UserEntity.addUser(req.params)
    console.log("insertRoute");
    User.addUser;
    // res.status(StatusCodes.CREATED).send(req.params.Id);
});
exports.default = UserRoute;
