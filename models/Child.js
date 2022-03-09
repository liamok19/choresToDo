const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Child extends Model {}

Child.init(
    {
        id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        },
        name: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        // description: {
        // type: DataTypes.STRING,
        // },
        // date_created: {
        // type: DataTypes.DATE,
        // allowNull: false,
        // defaultValue: DataTypes.NOW,
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
