const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Child extends Model {}

Child.init(
    {
        // define columns
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
        TotalCredits: {
            type: DataTypes.INTEGER,
        },
        creditType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        parent_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'parent',
                foreignKey: 'id',
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                foreignKey: 'id',
            },
        },
    },{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Child',
    },
);

module.exports = Child;
