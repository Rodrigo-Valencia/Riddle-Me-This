const User = require('./user');
const Answers = require('./Answers');
const Riddles = require('./Riddles');

Riddles.hasMany(Answers, {
    foreignKey: 'riddles_id',
});

Answers.belongsTo(Riddles, {
    foreignKey: "riddles_id"
});


module.exports = {
    User,
    Riddles,
    Answers,
};