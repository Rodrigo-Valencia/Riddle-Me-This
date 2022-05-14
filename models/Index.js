const User = require('./User');
const Answers = require('./Answers');
const Riddles = require('./Riddles');

// Riddles.hasMany(Answers, {
//     // foreignKey: 'id',
// });

// Answers.belongsTo(Riddles, {
//     // foreignKey: "id"
// });


module.exports = {
    User: User,
    Riddles,
    Answers,
};