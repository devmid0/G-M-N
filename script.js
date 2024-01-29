let guessAns = Math.trunc((Math.random() * 20) + 1);
let score = 20;
let highscore = 0;

let displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('⛔️ No number!');

    } else if (guess === guessAns) {

        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = guessAns;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if (guess !== guessAns) {
        if (score > 1) {
            displayMessage(guess > guessAns ? '🤦‍♂️ Too high!' : '🤦‍♂️ Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💥 You lost the game!');
            document.querySelector('body').style.backgroundColor = '#f00';
            document.querySelector('.score').textContent = 0;
        }
    }


});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    guessAns = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
});