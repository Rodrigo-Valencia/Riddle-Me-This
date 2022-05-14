const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Riddles extends Model {}

Riddles.init(
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
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'riddles',
  }
);

module.exports = Riddles;
