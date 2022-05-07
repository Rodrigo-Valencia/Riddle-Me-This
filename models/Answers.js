const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Answers extends Model {}

Answers.init(
  {
    //primary key
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    answers_queue: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //foreign key
    riddles_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Riddles",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Answers",
  }
);

module.exports = Answers;
