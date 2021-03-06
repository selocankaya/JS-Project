'use strict';

const randomNumber = Math.floor(Math.random() * 100 + 1);
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const message = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const highScoreEl = document.querySelector('.highscore');
const finalMessage = document.querySelector('.number');
const bodybg = document.querySelector('body');
let score = 10;
let highscore = 0;

checkBtn.addEventListener('click', evaluate);
againBtn.addEventListener('click', restart);
// FUNCTIONS

function evaluate() {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = 'โ No Number Entered โ';
  } else if (guess === randomNumber) {
    winner();

    if (score > highscore) {
      highscore = score;
      highScoreEl.textContent = highscore;
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
      message.textContent =
        guess > randomNumber ? '๐ Too high!' : '๐ Too low!';
      score--;
      scoreEl.textContent = score;
    } else {
      loser();
    }
  }
}

function winner() {
  message.textContent = '๐Congratulations๐ ';
  bodybg.style.backgroundColor = 'green';
  message.style.fontSize = '2.8rem';
  finalMessage.textContent = randomNumber;
}

function loser() {
  scoreEl.textContent = 0;
  message.textContent = 'โ You Lost โโ ';
  bodybg.style.backgroundColor = '#fb3640';
  finalMessage.textContent = 'โ';
}

function restart() {
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  finalMessage.textContent = '?';
  message.textContent = 'Start guessing...';
  bodybg.style.backgroundColor = '#222';
  scoreEl.textContent = 10;
  document.querySelector('.guess').value = '';
  message.style.fontSize = '2.5rem';
}
