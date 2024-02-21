"use strict";

const container = document.querySelector(".container");
const relogio = document.querySelector(".relogio");

const btns = container.querySelector(".controles");
const start = btns.querySelector("#start");
const stoped = btns.querySelector("#stop");
const restart = btns.querySelector("#restart");
let seconds = 0;
let intervalo;
const convertHorario = (segundos) => {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "GMT",
  });
};

start.addEventListener("click", () => {
  clearInterval(intervalo);
  intervalo = setInterval(() => {
    seconds++;
    relogio.textContent = convertHorario(seconds);
  }, 10);
  relogio.style.color = "#0f0";
});

stoped.addEventListener("click", () => {
  clearInterval(intervalo);
  relogio.style.color = "#f00";
});

restart.addEventListener("click", () => {
  clearInterval(intervalo);
  relogio.textContent = "00:00:00";
  relogio.style.color = "#000";
});
