const cookie = document.getElementById("pop-up");
const resetbtn = document.getElementById("reset");

function checkCookie() {
  return localStorage.getItem("cookieSet") === "true";
}
function showCookiePop() {
  cookie.style.display = "flex";
  resetbtn.style.display = "none";
}
function resetCookies() {
  localStorage.removeItem("cookieSet");
  showCookiePop();
}
function setCookies() {
  localStorage.setItem("cookieSet", true);
  resetbtn.style.display = "block";
}

document.querySelectorAll("#pop-up button").forEach((btn) =>
  btn.addEventListener("click", (e) => {
    if (e.currentTarget.id == "allow") {
      setCookies();
    }

    cookie.style.display = "none";
  }),
);

if (!checkCookie()) {
  showCookiePop();
}
