class CountdownTimer {
    private duration: number;
    private timerId: NodeJS.Timeout | null = null;
  
    constructor(duration: number) {
      this.duration = duration;
    }
  
    start(onTick: (remainingTime: number) => void, onEnd: () => void) {
      if (!this.timerId) {
        this.timerId = setInterval(() => {
          if (this.duration > 0) {
            this.duration--;
            onTick(this.duration);
          } else {
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
  
    private stop() {
      this.pause();
    }
  }
  
  // Example usage:
  const countdownElement = document.getElementById('countdown');
  const startButton = document.getElementById('start-button');
  const pauseButton = document.getElementById('pause-button');
  const resetButton = document.getElementById('reset-button');
  
  const timer = new CountdownTimer(60); // 60 seconds
  
  function updateDisplay(remainingTime: number) {
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
  