document.addEventListener("DOMContentLoaded", () => {
  const question = document
    .querySelector(".main")
    .querySelectorAll('[role="tab"]');

  const answer = document.querySelectorAll(".ans");

  question.forEach((questions) => {
    questions.addEventListener("click", (e) => {
      question.forEach((q) => q.classList.remove("show"));

      console.log(e.currentTarget);
    });
  });
});
