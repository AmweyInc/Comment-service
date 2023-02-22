const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const User = require('./User');

class Comment extends Model {

}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    text: DataTypes.STRING,
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    }
}, { sequelize, modelName: 'comment' });

Comment.belongsTo( User, { foreignKey: 'userId' } );

module.exports = Comment;