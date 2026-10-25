//JS datepicker
const currentYear = new Date().getFullYear();
const picker = datepicker("#date-picker", {
  formatter: (input, date) => {
    const value = date.toLocaleDateString();
    input.value = value;
  },
  defaultView: "overlay",
  minDate: new Date(1950, 0, 1),
  maxDate: new Date(currentYear - 1, 0, 1),
  respectDisabledReadOnly: true,
});
picker.calendarContainer.style.setProperty("width", "100%");

// Luxon
document.getElementById("calculate").addEventListener("click", () => {
  var DateTime = luxon.DateTime;
  const now = DateTime.now();
  const dateVal = document.getElementById("date-picker").value;
  const birthdate = DateTime.fromJSDate(new Date(dateVal));

  const age = now.diff(birthdate, ["years", "months"]).toObject();

  let txt = `You are ${age.years} years ${age.months.toFixed(1)} old `;

  if (age.years != null) {
    document.getElementById("age").textContent = txt;
  }

  return;
});
