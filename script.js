'use strict';

const MAX_SCORE = 20;
const MAX_NUMBER = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number)   {
  document.querySelector('.number').textContent = number;
};

const displayScore = function (score)     {
  document.querySelector('.score').textContent = score;
};

function getSecretNumber()                {
  return Math.ceil(Math.random() * MAX_NUMBER);
}

let secretNumber = getSecretNumber();
let score = MAX_SCORE;

document.querySelector('#max-value').innerHTML = MAX_NUMBER;
document.querySelector('.score').innerHTML = MAX_SCORE;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // When there is no answer
  if (!guess) {
    displayMessage('🤷🏻‍♀️ No number');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🥳 Correct number');
    displayNumber(secretNumber);

    document.querySelector('body').style.backgroundColor = '#03c04a';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '⬆️ Too high' : '⬇️ Too low');
      score--;
      displayScore(score);
    } else {
      displayMessage('❌ Game Over!');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = getSecretNumber();
  score = MAX_SCORE;
  displayMessage('Start guessing...');
  displayScore(MAX_SCORE);
  displayNumber('?');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
