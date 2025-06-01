class QuizApp {
  constructor() {
    this.currentCategory = "";
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.timeLeft = 30;
    this.timer = null;
    this.selectedAnswer = null;
    this.currentQuestions = [];

    this.initializeElements();
    this.bindEvents();
  }

  initializeElements() {
    // Screens
    this.welcomeScreen = document.getElementById("welcome-screen");
    this.categoryScreen = document.getElementById("category-screen");
    this.quizScreen = document.getElementById("quiz-screen");
    this.resultsScreen = document.getElementById("results-screen");

    // Buttons
    this.startBtn = document.getElementById("start-btn");
    this.categoryBtns = document.querySelectorAll(".category-btn");
    this.optionBtns = document.querySelectorAll(".option-btn");
    this.nextBtn = document.getElementById("next-btn");
    this.retryBtn = document.getElementById("retry-btn");
    this.homeBtn = document.getElementById("home-btn");

    // Quiz elements
    this.categoryName = document.getElementById("category-name");
    this.questionCounter = document.getElementById("question-counter");
    this.timerElement = document.getElementById("timer");
    this.questionText = document.getElementById("question-text");

    // Results elements
    this.finalScore = document.getElementById("final-score");
    this.resultCategory = document.getElementById("result-category");
    this.correctCount = document.getElementById("correct-count");
    this.accuracy = document.getElementById("accuracy");
  }

  bindEvents() {
    this.startBtn.addEventListener("click", () => this.showCategoryScreen());

    this.categoryBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        this.currentCategory = e.currentTarget.dataset.category;
        this.startQuiz();
      });
    });

    this.optionBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => this.selectAnswer(e.currentTarget));
    });

    this.nextBtn.addEventListener("click", () => this.nextQuestion());
    this.retryBtn.addEventListener("click", () => this.retryQuiz());
    this.homeBtn.addEventListener("click", () => this.goHome());
  }

  showScreen(screenToShow) {
    document.querySelectorAll(".screen").forEach((screen) => {
      screen.classList.remove("active");
    });
    screenToShow.classList.add("active");
  }

  showCategoryScreen() {
    this.showScreen(this.categoryScreen);
  }

  startQuiz() {
    this.currentQuestions = [...questions[this.currentCategory]];
    this.shuffleArray(this.currentQuestions);
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.selectedAnswer = null;

    this.updateCategoryDisplay();
    this.showScreen(this.quizScreen);
    this.loadQuestion();
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  updateCategoryDisplay() {
    const categoryNames = {
      sql: "SQL",
      programming: "Programming",
      networking: "Networking",
      os: "Operating Systems",
    };
    this.categoryName.textContent = categoryNames[this.currentCategory];
  }

  loadQuestion() {
    const question = this.currentQuestions[this.currentQuestionIndex];

    this.questionCounter.textContent = `${this.currentQuestionIndex + 1} / ${
      this.currentQuestions.length
    }`;
    this.questionText.textContent = question.question;

    this.optionBtns.forEach((btn, index) => {
      btn.textContent = question.options[index];
      btn.classList.remove("selected", "correct", "incorrect");
      btn.disabled = false;
    });

    this.nextBtn.style.display = "none";
    this.selectedAnswer = null;
    this.startTimer();
  }

  startTimer() {
    this.timeLeft = 30;
    this.updateTimerDisplay();

    this.timer = setInterval(() => {
      this.timeLeft--;
      this.updateTimerDisplay();

      if (this.timeLeft <= 0) {
        this.timeUp();
      }
    }, 1000);
  }

  updateTimerDisplay() {
    this.timerElement.textContent = this.timeLeft;

    // Change timer color based on time left
    const timerCircle = document.querySelector(".timer-circle");
    if (this.timeLeft <= 10) {
      timerCircle.style.background = "linear-gradient(45deg, #e17055, #fd79a8)";
    } else if (this.timeLeft <= 20) {
      timerCircle.style.background = "linear-gradient(45deg, #fdcb6e, #e17055)";
    } else {
      timerCircle.style.background = "linear-gradient(45deg, #ff6b6b, #feca57)";
    }
  }

  stopTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  timeUp() {
    this.stopTimer();
    this.showCorrectAnswer();
    this.nextBtn.style.display = "block";
  }

  selectAnswer(selectedBtn) {
    if (this.selectedAnswer !== null) return;

    this.stopTimer();
    this.selectedAnswer = parseInt(selectedBtn.dataset.option);
    selectedBtn.classList.add("selected");

    // Disable all option buttons
    this.optionBtns.forEach((btn) => (btn.disabled = true));

    this.checkAnswer();
  }

  checkAnswer() {
    const question = this.currentQuestions[this.currentQuestionIndex];
    const isCorrect = this.selectedAnswer === question.correct;

    if (isCorrect) {
      this.score++;
      this.optionBtns[this.selectedAnswer].classList.add("correct");
    } else {
      this.optionBtns[this.selectedAnswer].classList.add("incorrect");
      this.optionBtns[question.correct].classList.add("correct");
    }

    this.nextBtn.style.display = "block";
  }

  showCorrectAnswer() {
    const question = this.currentQuestions[this.currentQuestionIndex];
    this.optionBtns[question.correct].classList.add("correct");
    this.optionBtns.forEach((btn) => (btn.disabled = true));
  }

  nextQuestion() {
    this.currentQuestionIndex++;

    if (this.currentQuestionIndex < this.currentQuestions.length) {
      this.loadQuestion();
    } else {
      this.showResults();
    }
  }

  showResults() {
    const accuracy = Math.round(
      (this.score / this.currentQuestions.length) * 100
    );

    this.finalScore.textContent = this.score;
    this.resultCategory.textContent = this.categoryName.textContent;
    this.correctCount.textContent = this.score;
    this.accuracy.textContent = `${accuracy}%`;

    // Animate score circle
    this.animateScore();

    this.showScreen(this.resultsScreen);
  }

  animateScore() {
    const scoreCircle = document.querySelector(".score-circle");
    const accuracy = (this.score / this.currentQuestions.length) * 100;

    if (accuracy >= 80) {
      scoreCircle.style.background = "linear-gradient(45deg, #00b894, #00cec9)";
    } else if (accuracy >= 60) {
      scoreCircle.style.background = "linear-gradient(45deg, #fdcb6e, #e17055)";
    } else {
      scoreCircle.style.background = "linear-gradient(45deg, #e17055, #fd79a8)";
    }

    // Add bounce animation
    scoreCircle.style.animation = "bounce 0.6s ease-in-out";
    setTimeout(() => {
      scoreCircle.style.animation = "";
    }, 600);
  }

  retryQuiz() {
    this.startQuiz();
  }

  goHome() {
    this.showScreen(this.welcomeScreen);
    this.stopTimer();
  }
}

// Add bounce animation to CSS
const style = document.createElement("style");
style.textContent = `
    @keyframes bounce {
        0%, 20%, 60%, 100% { transform: translateY(0); }
        40% { transform: translateY(-10px); }
        80% { transform: translateY(-5px); }
    }
`;
document.head.appendChild(style);

// Initialize the quiz app when the page loads
document.addEventListener("DOMContentLoaded", () => {
  new QuizApp();
});
