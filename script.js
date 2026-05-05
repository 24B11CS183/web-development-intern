// Quiz Data
const quizData = [
  { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyperlinks Text Management Language"], answer: "Hyper Text Markup Language" },
  { question: "Which CSS property controls text size?", options: ["font-size", "text-style", "size"], answer: "font-size" },
  { question: "Which keyword is used to declare a variable in JavaScript?", options: ["var", "let", "const", "All of the above"], answer: "All of the above" }
];

let currentQuestion = 0;
let score = 0;

function loadQuiz() {
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = `
    <p>${quizData[currentQuestion].question}</p>
    ${quizData[currentQuestion].options.map(opt => `<button onclick="checkAnswer('${opt}')">${opt}</button>`).join("")}
  `;
}

function checkAnswer(selected) {
  if (selected === quizData[currentQuestion].answer) {
    score++;
  }
  document.getElementById("nextBtn").style.display = "block";
}

document.getElementById("nextBtn").addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuiz();
    document.getElementById("nextBtn").style.display = "none";
  } else {
    document.getElementById("quiz-container").innerHTML = "";
    document.getElementById("result").innerText = `Quiz Completed! Your score: ${score}/${quizData.length}`;
    document.getElementById("nextBtn").style.display = "none";
  }
});

// Initialize Quiz
loadQuiz();

// Carousel
let currentImage = 1;
function nextImage() {
  currentImage++;
  if (currentImage > 5) currentImage = 1;
  document.getElementById("carouselImage").src = `https://picsum.photos/400/250?random=${currentImage}`;
}

function prevImage() {
  currentImage--;
  if (currentImage < 1) currentImage = 5;
  document.getElementById("carouselImage").src = `https://picsum.photos/400/250?random=${currentImage}`;
}

// API Fetch
async function fetchJoke() {
  const response = await fetch("https://official-joke-api.appspot.com/random_joke");
  const data = await response.json();
  document.getElementById("joke").innerText = `${data.setup} - ${data.punchline}`;
}
