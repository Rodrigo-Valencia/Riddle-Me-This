const { Answers } = require("../models");

const answersData = [
  {
    title: 'Love',
    riddles_id: 1,
  },
  { 
    title: 'He lies still',
    riddles_id: 2,
  },
  {
    title: 'The one with the biggest head',
    riddles_id: 3,
  },
  {
    title: 'The human brain',
    riddles_id: 4,
  },
  {
    title: 'Justice',
    riddles_id: 5,
  },
  {
    title: 'The Bat Signal',
    riddles_id: 6,
  },
  {
    title: 'The letter e',
    riddles_id: 7,
  },
  { 
    title: 'A clock',
    riddles_id: 8
  }
];

const seedAnswers = () => Answers.bulkCreate(answersData)

module.exports = seedAnswers;