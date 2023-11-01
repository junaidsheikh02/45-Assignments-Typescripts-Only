const targetNumber: number = Math.floor(Math.random() * 100) + 1;
let attempts: number = 0;

function checkGuess(): void {
  const guessInput: HTMLInputElement | null = document.getElementById('guess') as HTMLInputElement;
  const message: HTMLParagraphElement | null = document.getElementById('message') as HTMLParagraphElement;
  
  if (guessInput && message) {
    const guess: number = parseInt(guessInput.value);

    attempts++;

    if (guess === targetNumber) {
      message.textContent = `Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`;
    } else if (guess < targetNumber)
