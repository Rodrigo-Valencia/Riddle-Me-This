const { Answers } = require("../models");

const answersData = [
  {
    title: 'Love'.toUpperCase(),
    riddles_id: 1,
  },
  { 
    title: 'He lies still'.toUpperCase(),
    riddles_id: 2,
  },
  {
    title: 'The one with the biggest head'.toUpperCase(),
    riddles_id: 3,
  },
  {
    title: 'The human brain'.toUpperCase(),
    riddles_id: 4,
  },
  {
    title: 'Justice'.toUpperCase(),
    riddles_id: 5,
  },
  {
    title: 'The Bat Signal'.toUpperCase(),
    riddles_id: 6,
  },
  {
    title: 'The letter e'.toUpperCase(),
    riddles_id: 7,
  },
  { 
    title: 'A clock'.toUpperCase(),
    riddles_id: 8
  }
];

const seedAnswers = () => Answers.bulkCreate(answersData)

module.exports = seedAnswers;