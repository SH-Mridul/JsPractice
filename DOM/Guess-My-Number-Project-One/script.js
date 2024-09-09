'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = document.querySelector('.score').textContent;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
    let guessValue = document.querySelector('.guess').value;

    if (score === 0) {
        document.querySelector('.message').textContent = `You Lost it!`;
        document.querySelector('.check').setAttribute('disabled', '');
        document.querySelector('.guess').setAttribute('disabled', '');
        document.querySelector('body').style.backgroundColor = '#FF3D3D';
        return;
    }

    if (!guessValue) {
        document.querySelector('.message').textContent = `⛔ No Number!`;
        score--;
    } else if (guessValue == number) {
        document.querySelector('.message').textContent = `🏆 You got it!`;
        document.querySelector('.number').textContent = number;
        document.querySelector('.check').setAttribute('disabled', '');
        document.querySelector('.guess').setAttribute('disabled', '');
        document.querySelector('body').style.backgroundColor = '#60b347';

        if (highScore < Number(score)) {
            highScore = Number(score);
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guessValue < 0) {
        document.querySelector('.message').textContent = `you can't guess a minus value!`;
        score--;
    } else if (guessValue > 20) {
        document.querySelector('.message').textContent = `you can't guess a bigger value then 20!`;
        score--;
    } else if (guessValue < number) {
        document.querySelector('.message').textContent = `Too Low!`;
        score--;
    } else if (guessValue > number) {
        document.querySelector('.message').textContent = `Too big!`;
        score--;
    }

    document.querySelector('.score').textContent = score;
});

document.querySelector('.again').addEventListener('click', function () {

    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('.check').removeAttribute("disabled");
    document.querySelector('.guess').removeAttribute("disabled");

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
