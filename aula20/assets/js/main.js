"use strict";

const container = document.querySelector(".container");
const cronometro = container.querySelector(".cronometro");
const h1 = cronometro.querySelectorAll("h1");
const time = cronometro.querySelectorAll(".time");

const btns = container.querySelector(".controles");
const start = btns.querySelector("#start");
const stoped = btns.querySelector("#stop");
const restart = btns.querySelector("#restart");

let arrayDate = [];
time.forEach(function (el) {
  arrayDate.push(el.innerHTML);
});

let [hoursElement, minutesElement, secondsElement] = arrayDate;

const inicialHour = hoursElement;
const inicialMinutes = minutesElement;
const inicialSeconds = secondsElement;

let intervalo;

function calculoDoTempo() {
  hoursElement = parseInt(hoursElement);
  minutesElement = parseInt(minutesElement);
  secondsElement = parseInt(secondsElement);

  intervalo = setInterval(() => {
    secondsElement++;

    if (secondsElement == 60) {
      minutesElement += secondsElement / 60;
      secondsElement = secondsElement % 60;
      console.log(secondsElement);
    }
    if (minutesElement == 60) {
      hoursElement += minutesElement / 60;
      minutesElement = minutesElement % 60;
    }

    hour.textContent = `${String(hoursElement).padStart(2, "0")}`;
    minute.textContent = ` ${String(minutesElement).padStart(2, "0")}`;
    second.textContent = `${String(secondsElement).padStart(2, "0")}`;
  }, 1000);
}
// let incremento = () => {
//   setInterval(() => {
//     time.style.color = "#00ff00";
//     secondsElement++;
//     if (secondsElement > 59) {
//       secondsElement = 0;

//       minutesElement++;
//       if (minutesElement > 59) {
//         minutesElement = 0;
//         hoursElement++;
//         if (hoursElement > 23) {
//           hoursElement = 0;
//           minutesElement = 0;
//           secondsElement = 0;
//         }
//       }
//     }
//     // console.log(
//     //   `${String(hoursElement).padStart(2, "0")}:${String(
//     //     minutesElement
//     //   ).padStart(2, "0")}:${String(secondsElement).padStart(2, "0")}`
//     // );
//     hour.textContent = String(hoursElement).padStart(2, "0");
//     minute.textContent = String(minutesElement).padStart(2, "0");
//     second.textContent = String(secondsElement).padStart(2, "0");
//   }, 1000);
// };

const startCrono = start.addEventListener("click", () => {
  calculoDoTempo();
  h1.forEach((el) => {
    el.style.color = "#00ff00";
  });
});

const stopCrono = stoped.addEventListener("click", () => {
  clearInterval(intervalo);
  h1.forEach((el) => {
    el.style.color = "#ff0000";
  });
});

const restartCrono = restart.addEventListener("click", () => {
  clearInterval(intervalo);
  hoursElement = String(inicialHour).padStart(2, "0");
  minutesElement = String(inicialMinutes).padStart(2, "0");
  secondsElement = String(inicialSeconds).padStart(2, "0");
  calculoDoTempo();
});
