class WordCounter {
    countWords(text: string): number {
      // Split the text into words using various word separators
      const words = text.split(/\s+/).filter((word) => word.trim() !== '');
      return words.length;
    }
  }
  
  // Example usage:
  const counter = new WordCounter();
  const textArea = document.getElementById('text-area') as HTMLTextAreaElement;
  const wordCountDisplay = document.getElementById('word-count') as HTMLSpanElement;
  
  textArea.addEventListener('input', () => {
    const inputText = textArea.value;
    const wordCount = counter.countWords(inputText);
    wordCountDisplay.textContent = `Word Count: ${wordCount}`;
  });
  