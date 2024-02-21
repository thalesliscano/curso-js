"use strict";
const nome = "Luiz";
let i = 0;
// Diferente dos outros, o while você não sabe direto quando vai acabar, mas você pode fazer o mesmo tipo de interação igual os outros
while (i < nome.length) {
  console.log(nome[i]);
  i++;
}


function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return parseFloat(r.toFixed(0));
}

let min = 1;
let max = 50;
// let rand = random(min, max);
let rand = 10;
// while checa a condição depois faz
while (rand !== 10) {
  rand = random(min, max);
  console.log(rand);
}

// do while - faz depois checa a condição
do {
  rand = random(min, max);
  console.log(rand);
} while (rand !== 10);
