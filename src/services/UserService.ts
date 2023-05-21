const UserEntity = require("../entity/UserEntity");
import { Request, Response, NextFunction } from "express";

// module.exports = {
//     async ListAll(req: Request, res: Response) {
//         try {
//             const usersList = await UserEntity.findAll();
//             return usersList.json();
//         } catch (error) {
//             return "Erro na lista de usuários: " + error;
//         }
//     },

//     async GetById() {
//         try {
//             const user = await UserEntity.findByPk(req.params.Id);
//             return user.json();
//         } catch (error) {
//             return "Erro ao buscar usuário: " + req.params.Id;
//         }
//     },

//     async addUser(req: Request, res: Response, next: NextFunction) {
//         try {
//             const user = await UserEntity.create({
//                 Description: req.body.Description,
//             });
//             return "Registro adicionado com sucesso.";

//         } catch (error) {
//             return "Erro ao adicionar usuário: " + error;
//         }
//     },

//     async updateUser(req: Request, res: Response) {
//         try {
//             const userEntity = await UserEntity.findByPk(req.body.Id);
//             if (userEntity) {
//                 userEntity.Description = req.body.Description;
//                 userEntity.save();
//             }

//             return "Registro alterado com sucesso.";

//         } catch (error) {
//             return "Erro ao alterar usuário: " + error;
//         }
//     },

//     async deleteUser(req: Request, res: Response) {
//         try {
//             const userEntity = await UserEntity.findByPk(req.body.Id);
//             await userEntity.destroy();
//             return "Registro excluído com sucesso.";
//         } catch (error) {
//             return "Erro ao deletar usuário: " + error;
//         }
//     },
// };

const LisyAll = async () => {
    try {
        const usersList = await UserEntity.findAll();
        return usersList.json();
    } catch (error) {
        return "Erro na lista de usuários: " + error;
    }
}

export default { LisyAll };