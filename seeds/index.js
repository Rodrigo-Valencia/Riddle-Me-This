const seedRiddles = require("./Riddles-seeds");
const seedAnswers = require("./Answers-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
    await sequelize.sync({ force: true});
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedRiddles();
    console.log('\n----- RIDDLES SYNCED -----\n');
    await seedAnswers();
    console.log('\n----- ANSWERS SYNCED -----\n');
    process.exit(0);
};

seedAll();