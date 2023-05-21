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
    //         const user = await UserService.addUser({
    //             Description: req.body.Description,
    //         });
    //         return res.status(StatusCodes.CREATED).send("Registro adicionado com sucesso.");
        
    //     } catch (error) {
    //         return res.status(StatusCodes.BAD_REQUEST).send(error);
    //     }
    // },

    // async updateUser(req: Request, res: Response) {
    //     try {
    //         const userEntity = await UserService.updateUser(req.body.Id);

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
};
