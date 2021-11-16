const bcrypt = require('bcrypt');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// AskBCS mentioned making a "Cart" on the User model and make it an array of rv_id
// Then just push or pull rv_id's when the user adds or removes items from their cart


User.init(
  {
    // define an id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4]
      }
    }
  },
  {  
  hooks: {
  async beforeCreate(newUserData) {
    newUserData.password = await bcrypt.hash(newUserData.password, 10);
    return newUserData;
  },
  async beforeUpdate(updatedUserData) {
    updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
    return updatedUserData;
    },
  },

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'User'
  }
);

module.exports = User;