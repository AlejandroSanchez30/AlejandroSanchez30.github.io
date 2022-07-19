const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const hora = document.getElementById("hora");
const minuto = document.getElementById("minuto");
const segundo = document.getElementById("segundo");

const day = document.getElementById("day");

const dayContainer = document.getElementById("day-container");

function setHour() {
  const date = new Date();

  hora.innerHTML = date.getHours();
  minuto.innerHTML = date.getMinutes();
  if (date.getSeconds() < 10) {
    segundo.innerHTML = "0" + date.getSeconds();
  } else {
    segundo.innerHTML = date.getSeconds();
  }
  if (date.getMinutes() < 10) {
    minuto.innerHTML = "0" + date.getMinutes();
  } else {
    minuto.innerHTML = date.getMinutes();
  }
  if (date.getHours() < 10) {
    hora.innerHTML = "0" + date.getHours();
  } else {
    hora.innerHTML = date.getHours();
  }
}

function setDay() {
  const date = new Date();

  for (const letter of days[date.getDay() - 1]) {
    const paragraph = document.createElement("p");
    const letterTxt = document.createTextNode(letter);
    paragraph.appendChild(letterTxt);
    dayContainer.appendChild(paragraph);
  }
}

setInterval(setHour, 1000);
setDay();
