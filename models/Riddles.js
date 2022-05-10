const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Riddles extends Model {}

Riddles.init(
  {
    riddle_queue: {
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
