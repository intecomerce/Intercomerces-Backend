// const UserService = require("../services/UserService");
import UserService from '../services/UserService';
import { Request, Response, NextFunction } from "express";
import StatusCodes from "http-status-codes";

module.exports = {
    async ListAll(req: Request, res: Response) {
        try {
            const usersList = await UserService.LisyAll();
            return res.status(StatusCodes.OK).json(usersList);
        } catch (error) {
            return res.status(StatusCodes.BAD_REQUEST).send(error);
        }
    },

    // async GetById(req: Request, res: Response) {
    //     try {
    //         const user = await UserService.GetById(req.params.Id);
    //         return res.status(StatusCodes.OK).json(user);
    //     } catch (error) {
    //         return res.status(StatusCodes.BAD_REQUEST).send(error);
    //     }
    // },

    // async addUser(req: Request, res: Response, next: NextFunction) {
    //     try {
    //         const user = await UserEntity.create({
    //             Name: req.body.Name,
    //             Email: req.body.Email,
    //             Nascimento: req.body.Nascimento
    //         });
    //         return console.log("Registro adicionado com sucesso.");

    //     } catch (error) {
    //         return res.status(StatusCodes.BAD_REQUEST).send(error);
    //     }
    // },

    // async updateUser(req: Request, res: Response) {
    //     try {
    //         const userEntity = await UserEntity.findByPk(req.body.Id);
    //         if (userEntity) {
    //             userEntity.Name = req.body.Name,
    //                 userEntity.Email = req.body.Email,
    //                 userEntity.Nascimento = req.body.Nascimento
    //             userEntity.save();
    //         }

    //         return console.log("Registro alterado com sucesso.");

    //     } catch (error) {
    //         return res.status(StatusCodes.BAD_REQUEST).send(error);
    //     }
    // },

    // async deleteUser(req: Request, res: Response) {
    //     try {
    //         const userEntity = await UserService.deleteUser(req.body.Id);
    //         return res.status(StatusCodes.OK).send("Registro excluído com sucesso.");
    //     } catch (error) {
    //         return res.status(StatusCodes.BAD_REQUEST).send(error);
    //     }
    // },
}
