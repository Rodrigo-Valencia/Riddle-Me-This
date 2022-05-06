const { Answers } = require("../models");

const answersData = [
  {
    answers_queue: 'Love',
    riddles_id: 1,
  },
  { 
    answers_queue: 'He lies still',
    riddles_id: 2,
  },
  {
    answers_queue: 'The one with the biggest head',
    riddles_id: 3,
  },
  {
    answers_queue: 'The human brain',
    riddles_id: 4,
  },
  {
    answers_queue: 'Justice',
    riddles_id: 5,
  },
  {
    answers_queue: 'The Bat Signal',
    riddles_id: 6,
  },
  {
    answers_queue: 'The letter e',
    riddles_id: 7,
  },
  { 
    answers_queue: 'A clock',
    riddles_id: 8
  }
];

const seedAnswers = () => Answers.bulkCreate(answersData)

module.exports = seedAnswers;