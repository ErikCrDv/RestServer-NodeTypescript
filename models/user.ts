import { DataTypes } from 'sequelize';
import database from '../database/connection';

const User = database.define('User', {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.BOOLEAN
    }
});

export default User;