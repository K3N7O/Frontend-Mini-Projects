function display(e, target) {
  var tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => tab.classList.remove("active"));

  var contents = document.querySelectorAll(".tab-content");
  contents.forEach((cont) => cont.classList.remove("show"));

  document.getElementById(target).classList.add("show");
  e.target.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".tab-content").classList.add("show");
});
