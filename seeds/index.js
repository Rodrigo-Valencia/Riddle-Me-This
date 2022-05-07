const sequelize = require('../config/connection');
const seedRiddles = require('./Riddles-seeds');
const seedAnswers = require('./Answers-seeds');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedRiddles();
    await seedAnswers();

    process.exit(0);
};

seedAll();