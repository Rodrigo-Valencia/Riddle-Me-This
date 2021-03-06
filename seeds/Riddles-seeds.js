const { Riddles } = require("../models");

const riddlesData = [
  {
    name:
      'I can start a war or end one. I can give you the strength of heroes or leave you powerless. I might be snared with a glance, but no force can compel me to stay. What am I?'.toUpperCase(),
  },
  {
    name:
    'What does a liar do when he is dead?'.toUpperCase(),
  },
  {
    name:
    'Which president wore the biggest hat?'.toUpperCase(),
  },
  {
    name:
    'I have a billions of eyes, yet I live in darkness. I have millions of ears, yet only four lobes. I have no muscle, yet I rule two hemispheres. What am I?'.toUpperCase(),
  },
  {
    name:
    'It can be cruel, poetic, or blind. But when it is denied, it is violence you may find. What am I?'.toUpperCase(),
  },
  {
    name:
    'Hope shines brightly in a city this dark, find the source of the signal and you will soon hit your mark. What am I?'.toUpperCase(),
  },
  {
    name:
    'What is the beginning of eternity, the end of time and space, the beginning of every end, and the end of every race?'.toUpperCase(),
  },
  { 
    name:
    'If you look at the numbers on my face, you will not find 13 anyplace. What am I?'.toUpperCase(),
  }
];


const seedRiddles = () => Riddles.bulkCreate(riddlesData)

module.exports = seedRiddles;