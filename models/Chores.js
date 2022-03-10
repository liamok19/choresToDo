const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Chores extends Model {}

Chores.init(
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
        description: {
            type: DataTypes.STRING,
        },
        //Days later feature 
        // date_created: {
        //     type: DataTypes.DATE,
        //     allowNull: false,
        //     defaultValue: DataTypes.NOW,
        // },
        //simplified VS pro version
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        //Leater feature
        // star_value: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
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
        modelName: 'Chores',
    }
);

module.exports = Chores;
