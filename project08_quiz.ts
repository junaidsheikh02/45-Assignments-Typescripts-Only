interface Question {
    questionText: string;
    options: string[];
    correctAnswerIndex: number;
  }
  
  class Quiz {
    private questions: Question[];
    private currentQuestionIndex: number = 0;
    private userScore: number = 0;
  
    constructor(questions: Question[]) {
      this.questions = questions;
    }
  
    getCurrentQuestion(): Question {
      return this.questions[this.currentQuestionIndex];
    }
  
    selectAnswer(selectedIndex: number) {
      const currentQuestion = this.getCurrentQuestion();
  
      if (currentQuestion && selectedIndex === currentQuestion.correctAnswerIndex) {
        this.userScore++;
      }
  
      this.currentQuestionIndex++;
    }
  
    isQuizComplete(): boolean {
      return this.currentQuestionIndex >= this.questions.length;
    }
  
    getScore(): number {
      return this.userScore;
    }
  }
  
  // Example usage:
  const quizQuestions: Question[] = [
    {
      questionText: 'What is the capital of France?',
      options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      correctAnswerIndex: 2,
    },
    // Add more questions...
  ];
  
  const quiz = new Quiz(quizQuestions);
  
  // Display the current question and answer options
  const currentQuestion = quiz.getCurrentQuestion();
  console.log(currentQuestion.questionText);
  currentQuestion.options.forEach((option, index) => {
    console.log(`${index + 1}. ${option}`);
  });
  
  // Simulate user selecting an answer (e.g., choose the correct answer)
  quiz.selectAnswer(currentQuestion.correctAnswerIndex);
  
  // Check if the quiz is complete and get the user's score
  if (quiz.isQuizComplete()) {
    console.log(`Quiz complete! Your score: ${quiz.getScore()}`);
  }
  