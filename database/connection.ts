import { Sequelize } from 'sequelize';

const database = new Sequelize('nodets','root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3308,
    // logging: false
});

export default database;