const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Riddles extends Model {}

Riddles.init(
  {
    //primary key
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    riddle_queue: {
        type: DataTypes.STRING, 
        allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Riddles",
  }
);

module.exports = Riddles;
