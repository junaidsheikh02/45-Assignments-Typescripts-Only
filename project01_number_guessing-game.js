"use strict";
const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
function checkGuess() {
    const guessInput = document.getElementById('guess');
    const message = document.getElementById('message');
    if (guessInput && message) {
        const guess = parseInt(guessInput.value);
        attempts++;
        if (guess === targetNumber) {
            message.textContent = `Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`;
        }
        else if (guess < targetNumber)
            ;
    }
}
