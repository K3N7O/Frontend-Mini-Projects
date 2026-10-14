document.addEventListener("DOMContentLoaded", () => {
  const questions = document
    .querySelector(".main")
    .querySelectorAll('[role="tab"]');

  const answers = document.querySelectorAll(".ans");

  questions.forEach((question) => {
    question.addEventListener("click", (e) => {
      const clicked = e.currentTarget;
      const match = clicked.nextElementSibling;

      answers.forEach((a) => {
        if (match !== a) a.classList.remove("show");
      });

      match.classList.toggle("show");
    });
  });
});
