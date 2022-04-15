"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database = new sequelize_1.Sequelize('nodets', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3308,
    // logging: false
});
exports.default = database;
//# sourceMappingURL=connection.js.map