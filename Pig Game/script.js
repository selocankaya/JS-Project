'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');

const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');

let scores, activePlayer, currentScore, playing;

starter();
rollBtn.addEventListener('click', play);
holdBtn.addEventListener('click', holdScore);
newGame.addEventListener('click', starter);

function starter() {
  diceEl.classList.add('hidden');
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.add('active');
  player1El.classList.remove('active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
}

function play() {
  if (playing) {
    diceEl.classList.remove('hidden');
    const dice = Math.trunc(Math.random() * 6 + 1);
    diceEl.src = `dice-${dice}.png`;

    if (playing && dice !== 1) {
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
}

function switchPlayer() {
  if (playing) {
    currentScore = 0;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('active');
    player1El.classList.toggle('active');
  }
}

function holdScore() {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] > 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('.active');
      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
}
