const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class RV extends Model {}

RV.init(
  {
    // define an id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    rental_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // user_id: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //       model: 'user',
    //       key: 'id'
    //     }
    //   },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    length: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    city_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "city",
          key: "id",
        }
      }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'RV'
  }
);

module.exports = RV;