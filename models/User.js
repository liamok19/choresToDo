const { valuesIn } = require('lodash');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
const { async } = require('rxjs');

// console.log(sequelize);

class User extends Model {
  async checkPassword(loginPw) {
    return await bcrypt.compare(loginPw, this.password)
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    usertype: {
        type: DataTypes.STRING,
        allowedNull: false,
        validate: {
            customValidator(value) {
                if (value !== 'Parent' && value !== 'Child') {
                    throw new Error ("Invalid User Type Entered");
                }
            } 
        },
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6,10],
      },
    },
    hint: {
        type: DataTypes.STRING,
        allowNull: true,
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',

    hooks: {
      beforeCreate: async (user) => {
        user.password = await bcrypt.hash(user.password, 10);
      }, 
      beforeUpdate: async (user) => {
        user.password = await bcrypt.hash(user.password, 10);
      },
    },
  }
);

module.exports = User;
