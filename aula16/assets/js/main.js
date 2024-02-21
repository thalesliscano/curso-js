"use strict";

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// A palavra continue ela pula pra próxxima interação, no caso a abaixo quando for 2 ou 5, vai pular ambos e recomeçar o for
for (let n of num) {
  if (n === 2) {
    console.log("pulei o 2");
    continue;
  }

  console.log(n);
  if (n === 7) {
    console.log("7 encontrado! Saindo!");
    break;
  }
}

// break poupa memória do usuário por evitar rodar tudo
