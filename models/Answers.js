const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Answers extends Model {} 

Answers.init(
  {
    riddle_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    answers_queue: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'answers',
  }
);

module.exports = Answers;
