const questions = [
  {
    question: "What is HTML?",
    answers: ["Programming Language", "Markup Language", "Database", "OS"],
    correct: 1
  },
  {
    question: "Which is CSS used for?",
    answers: ["Logic", "Structure", "Styling", "Database"],
    correct: 2
  },
  {
    question: "Which language is used for web interactivity?",
    answers: ["Python", "Java", "JavaScript", "C++"],
    correct: 2
  }
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
  let current = questions[currentIndex];
  questionEl.textContent = current.question;
  answersEl.innerHTML = "";

  current.answers.forEach((ans, index) => {
    let btn = document.createElement("button");
    btn.textContent = ans;

    btn.onclick = () => selectAnswer(index);

    answersEl.appendChild(btn);
  });
}

function selectAnswer(index) {
  let correct = questions[currentIndex].correct;

  if (index === correct) {
    score++;
  }

  nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
  currentIndex++;

  if (currentIndex < questions.length) {
    loadQuestion();
    nextBtn.style.display = "none";
  } else {
    showResult();
  }
};

function showResult() {
  document.querySelector(".quiz-container").style.display = "none";
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("score").textContent = score + "/" + questions.length;
}

// Start
loadQuestion();
nextBtn.style.display = "none";