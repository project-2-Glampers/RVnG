const {Model, DataTypes } = require("sequelize" );
const sequelize = require("../config/connection");

class Cities extends Model {}

Cities.init(
  {
    id: {
      type: dataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: dataTypes.STRING,
      allowNull: false
    },
    state: {
      type: dataTypes.STRING,
      allowNull: false
    },
    country: {
      type: dataTypes.STRING,
      allowNull: false
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "Cities"
  }
);

module.exports = Cities;