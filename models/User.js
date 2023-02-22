const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

class User extends Model {

}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
}, {sequelize, modelName: 'user'});

module.exports = User;