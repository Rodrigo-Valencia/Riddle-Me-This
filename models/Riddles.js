const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Riddles extends Model {}

Riddles.init(
  {
    riddle_queue: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
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