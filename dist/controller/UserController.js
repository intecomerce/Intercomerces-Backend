"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserEntity = require("../entity/UserEntity");
module.exports = {
    ListAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usersList = yield UserEntity.findAll();
                console.log(usersList);
                return res.json(usersList);
            }
            catch (error) {
                return console.log("Erro na lista de produtos: " + error);
            }
        });
    },
    GetById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield UserEntity.findByPk(req.body.Id);
                return res.json(user);
            }
            catch (error) {
                return console.log("Erro na lista de produtos: " + error);
            }
        });
    },
    addUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("insert");
                const user = yield UserEntity.create({
                    Description: req.params.Description
                });
                return console.log("Registro adicionado com sucesso. " + res.json(user));
            }
            catch (error) {
                return console.log("Erro ao adicionar produto: " + error);
            }
        });
    },
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userEntity = yield UserEntity.findByPk(req.body.Id);
                if (userEntity) {
                    userEntity.Description = req.body.Description;
                    userEntity.save();
                }
                return console.log("Registro alterado com sucesso. " + res.json(UserEntity));
            }
            catch (error) {
                return console.log("Erro ao alterar produto: " + error);
            }
        });
    },
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userEntity = yield UserEntity.findByPk(req.body.Id);
                yield userEntity.destroy();
                return console.log("Registro excluído com sucesso.");
            }
            catch (error) {
                return console.log("Erro ao deletar produto: " + error);
            }
        });
    }
};
