//  { Model, DataTypes } = require('sequelize');
const Riddles = require('./Riddles');
const Answers = require('./Answers')

Answers.belongsTo(Riddles, {
    foreignKey: "riddles_id"
})










module.exports = {
    Riddles,
    Answers,
};