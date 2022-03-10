const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Child extends Model {}

Child.init(
    {
    // define columns
        id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    //required primary key for the product field.    
        primaryKey: true,
        autoIncrement: true,
    },
        name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
//     numberOfStars: {
//     type: DataTypes.INTEGER,
    // },
        parent_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'parent',
            key: 'id',
        },
    },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Child',
    }
);

module.exports = Child;
