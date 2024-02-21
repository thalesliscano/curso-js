"use strict";

const mostraHora = () => {
  let data = new Date();
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};

//Repete a execução de uma função ou de um techo de código em intevalos regulares de tempo
const timer = setInterval(() => {
  console.log(mostraHora());
}, 1000);

// Executa um trecho de código depois de um período determinado
setTimeout(() => {
  clearInterval(timer);
}, 3000);

setTimeout(() => {
  console.log("Olá mundo!");
}, 5000);
