function submitQuiz(event) {
  event.preventDefault();
  const quizForm = document.querySelector("form");
  const quizData = new FormData(quizForm);
  const correctAnswers = {
    president: "Bola Ahmed Tinubu",
    colonised: "Britain",
    worldcup: "Qatar",
  };
  let score = 0;

  for (const [question, answer] of quizData.entries()) {
    if (answer === correctAnswers[question]) {
      score++;
    }
  }

  alert(`You scored ${score} out of 3.`);
}

function resetQuiz() {
  const quizForm = document.querySelector("form");
  quizForm.reset();
  alert("Quiz reset.");
}

const submitBtn = document.getElementById("submit--btn");
submitBtn.addEventListener("click", submitQuiz);

const resetBtn = document.getElementById("reset--btn");
resetBtn.addEventListener("click", resetQuiz);
