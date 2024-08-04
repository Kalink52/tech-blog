const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Comment extends Model {}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    }, 
    date: {
        type: DataTypes.DATE,
        allowNull: false
    }, 
    body: {
        type: DataTypes.TEXT,
        allowNull: false
    }, 
    user_id:{
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
      }
    }, 
    post_id:{
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'post',
            key: 'id'
      }
    },

},{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
})

module.exports = Comment