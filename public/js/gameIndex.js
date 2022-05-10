import { getHighscore, setHighscore } from './gameFunction';
import { show, hide } from './utils';
import riddles from '../../seeds/Riddles-seeds';

const $startRiddle = document.getElementById('startRiddle');
const $currentRiddle = document.getElementById('currentRiddle');
const $textField = document.getElementById('textField');
const $time = document.getElementById('time');
const $scoreWrapper = document.getElementById('scoreWrapper');
const $score = document.getElementById('score');
const $highscore = document.getElementById('highscore');
const $footer = document.getElementById('footer');

const state = {
  doneRiddles: [],
  currentRiddle: '',
  inGame: false,
  time: 0,
  score: 0,
  isPassword: false
};
const gameLenght = 10;
var interval;

window.addEventListener('load', () => {
  $time.innerText = `${gameLenght}s`;

  $textField.focus();
  $textField.oninput = textFieldUpdate;
  $textField.placeholder = '"start"';

  $highscore.innerText = getHighscore();

  // only show current word when game starts
  hide($currentRiddle);
  // only show score display when game starts
  hide($scoreWrapper);
});

const textFieldUpdate = () => {
  const text = $textField.value.toLowerCase();

  if (!state.inGame && text === 'start') startGame();

  // if word guessed correct, get an extra second
  if (state.inGame && text.trim() === state.currentRiddle) {
    // 1 in 10 chance to get 2 extra seconds
    const r = Math.floor(Math.random() * 10);
    if (r === 0) {
      console.log('bonus time!');
      round(2);
      return;
    }

    // by default get 1 extra second for each correct word
    round(1);
  }
};

const startGame = () => {
  state.inGame = true;
  state.score = 0;

  // set game length
  $time.innerText = `${gameLenght}s`;

  // start round
  round(gameLenght);

  show($currentRiddle);
  hide($startRiddle);

  show($scoreWrapper);

  hide($footer);

  interval = setInterval(() => {
    state.time--;
    $time.innerText = `${state.time}s`;
    if (state.time <= 0) {
      endGame();
    }
  }, 1000);
};

// called each round, after word typed correctly
const round = (val) => {
  // clear the textfield
  $textField.value = '';

  state.time = state.time + val;
  state.score++;
  $score.innerText = state.score;

  // get random word
  while (true) {
    // if the word has already been given, don't give again
    state.currentRiddle = riddle[Math.floor(Math.random() * riddles.length)];
    if (state.doneRiddles.includes(state.currentRiddle)) {
      console.log(`${state.currentRiddle} already done!`);
    } else {
      break;
    }
  }

  $currentRiddle.innerText = state.currentRiddle;
  $textField.placeholder = `type "${state.currentRiddle}"`;

  state.doneRiddles.push(state.currentRiddle);

  // if doneWords is the same size as words, empty it out
  // because otherwise there are no words left
  if (state.doneRiddles.length === riddles.length) {
    console.log('All riddles done!');
    state.doneRiddles = [];
  }

  // reset it if it was the password field
  state.isPassword = false;
  $textField.type = 'text';
  $textField.blur();
  $textField.focus();

  // randomly, make the field a password field so users can't see what's going on
  // 1 in 6 chance
  const r = Math.floor(Math.random() * 6);
  if (r === 0) {
    state.isPassword = true;
    $textField.type = 'password';
  }
};

const endGame = () => {
  // reset timer
  clearInterval(interval);

  state.inGame = false;

  // show start text and change text
  show($startRiddle);
  $startRiddle.innerHTML = `
    <span class="game-over">Game over. </span> Type "<b>start</b>" to play again</span>
  `;

  // set placeholder to "start" and empty textfield
  $textField.placeholder = 'type "start"';
  $textField.value = '';
  // $textField.blur();

  // check if score more than highscore
  const highscore = getHighscore();
  if (state.score > highscore) {
    console.log('high score has been beaten!');
    // set new highscore
    $highscore.innerText = state.score;
    setHighscore(state.score);
  }

  // reset field if it was password field
  state.isPassword = false;
  $textField.type = 'text';

  hide($currentRiddle);
  show($footer);
};