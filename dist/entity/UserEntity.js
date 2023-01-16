"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database = require("../ConnectionDB");
// class User extends Model{}
// User.init(
//   {
//     Id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       allowNull: false,
//       primaryKey: true,
//     },
//     Description: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize: database,
//     modelName: "Generic",
//     timestamps:false
//   }
// );
database.sync();
exports.default = database.define('User', {
    Id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    Description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
});
