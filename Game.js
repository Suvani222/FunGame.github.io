const questions = [
  {
    question: "who's my all-time favourite artist?",
    answers: [
      { text: "eddie vedder", correct: false },
      { text: "john mayer", correct: false },
      { text: "jimi hendrix", correct: false },
      { text: "gosh! i can't pick one", correct: true },
    ],
  },
  {
    question: "my all-time favourite album?",
    answers: [
      { text: "room for squares", correct: true },
      { text: "sob rock", correct: false },
      { text: "havier things", correct: false },
      { text: "paradise valley", correct: false },
    ],
  },
  {
    question: "when is my birthday lol?",
    answers: [
      { text: "july 3", correct: false },
      { text: "august 5", correct: false },
      { text: "dec 2", correct: true },
      { text: "november 5", correct: false },
    ],
  },
  {
    question: "my zodiac sign?",
    answers: [
      { text: "cancer", correct: false },
      { text: "sagittarius", correct: true },
      { text: "leo", correct: false },
      { text: "virgo", correct: false },
    ],
  },
  {
    question: "i prefer podcasts over _____",
    answers: [
      { text: "reading books", correct: true },
      { text: "listening to music", correct: false },
      { text: "watching sports on TV", correct: false },
      { text: "coding", correct: false },
    ],
  },
  {
    question: "What is my favorite hobby?",
    answers: [
      { text: "playing guitar", correct: false },
      { text: "cooking/baking", correct: false },
      { text: "painting/drawing", correct: false },
      { text: "all of the above", correct: true },
    ],
  },
  {
    question: "my favourite color?",
    answers: [
      { text: "red", correct: false },
      { text: "white", correct: false },
      { text: "pink", correct: false },
      { text: "i don't have one", correct: true },
    ],
  },
  {
    question: "What is my preferred method of relaxation?",
    answers: [
      { text: "Listening to music", correct: false },
      { text: "Going for a walk in nature", correct: false },
      { text: "Watching a sunset or stargazing", correct: false },
      { text: "both 2&3", correct: true },
    ],
  },
  {
    question: "Which is my favorite type of outdoor activity?",
    answers: [
      { text: "camping", correct: false },
      { text: "trekking", correct: true },
      { text: "pickniking", correct: false },

      { text: "none of the above", correct: false },
    ],
  },

  {
    question: "phobia that i have?",
    answers: [
      { text: "aerophobia", correct: false },
      { text: "Ophidiophobia", correct: false },
      { text: "trypanophobia", correct: false },
      { text: "astraphobia", correct: true },
    ],
  },
  {
    question: "my favourite bass guitarist?",
    answers: [
      { text: "flea", correct: false },
      { text: "mohini dey", correct: false },
      { text: "ronal shakya", correct: true },
      { text: "marcus miller", correct: false },
    ],
  },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}
function showScore() {
  resetState();
  questionElement.innerHTML = `u scored ${score} out of ${questions.length}`;
  nextButton.innerHTML = "play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();
