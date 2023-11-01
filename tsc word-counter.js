"use strict";
class WordCounter {
    countWords(text) {
        // Split the text into words using various word separators
        const words = text.split(/\s+/).filter((word) => word.trim() !== '');
        return words.length;
    }
}
// Example usage:
const counter = new WordCounter();
const textArea = document.getElementById('text-area');
const wordCountDisplay = document.getElementById('word-count');
textArea.addEventListener('input', () => {
    const inputText = textArea.value;
    const wordCount = counter.countWords(inputText);
    wordCountDisplay.textContent = `Word Count: ${wordCount}`;
});
