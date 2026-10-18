const set = localStorage.getItem("cookieSet") == "allow";
const pop = document.querySelector(".pop-up");
const buttons = document.querySelectorAll("button");

if (!set) {
  pop.style.display = "flex";
}

buttons.forEach((b) =>
  b.addEventListener("click", (e) => {
    const target = e.currentTarget.getAttribute("id");

    if (target == "allow") {
      localStorage.setItem("cookieSet", target);
      document.querySelector(".pop-up").style.display = "none";
    }

    if (target == "decline") {
      localStorage.setItem("cookieSet", target);
      document.querySelector(".pop-up").style.display = "none";
    }
  }),
);

// localStorage.clear("cookieSet");
