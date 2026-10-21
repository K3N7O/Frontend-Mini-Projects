const txtArea = document.getElementById("txt-area");
const count = document.getElementById("indicator");

txtArea.addEventListener("input", () => {
  let num = txtArea.value.length;

  count.textContent = `${num}/250`;

  if (num >= 250) {
    txtArea.classList.add("max");
    count.classList.add("max");
  } else {
    txtArea.classList.remove("max");
    count.classList.remove("max");
  }
});
