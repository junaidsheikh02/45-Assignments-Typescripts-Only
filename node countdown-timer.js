"use strict";
class CountdownTimer {
    constructor(duration) {
        this.timerId = null;
        this.duration = duration;
    }
    start(onTick, onEnd) {
        if (!this.timerId) {
            this.timerId = setInterval(() => {
                if (this.duration > 0) {
                    this.duration--;
                    onTick(this.duration);
                }
                else {
                    this.stop();
                    onEnd();
                }
            }, 1000);
        }
    }
    pause() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }
    reset() {
        this.pause();
        this.duration = 0;
    }
    stop() {
        this.pause();
    }
}
// Example usage:
const countdownElement = document.getElementById('countdown');
const startButton = document.getElementById('start-button');
const pauseButton = document.getElementById('pause-button');
const resetButton = document.getElementById('reset-button');
const timer = new CountdownTimer(60); // 60 seconds
function updateDisplay(remainingTime) {
    countdownElement.textContent = `${Math.floor(remainingTime / 60)}:${remainingTime % 60}`;
}
startButton.addEventListener('click', () => {
    timer.start(updateDisplay, () => {
        console.log('Timer ended!');
    });
});
pauseButton.addEventListener('click', () => {
    timer.pause();
});
resetButton.addEventListener('click', () => {
    timer.reset();
    updateDisplay(timer.duration);
});
