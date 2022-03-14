const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Chores extends Model {}

Chores.init(
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
            type: DataTypes.BOOLEAN,
            default: false,
    },

    NumberofCredits: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    parent_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'parent',
            Foreignkey: 'id',
        },
    },
    child_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'child',
            Foreignkey: 'id',
        },  
    }
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
