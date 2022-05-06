//  { Model, DataTypes } = require('sequelize');
const Questions = require('./Riddles');
const Answers = require('./Answers')

Answers.belongsTo(Questions, {
    foreignKey: "questions_id"
})










module.exports = {
    Questions,
    Answers,
};