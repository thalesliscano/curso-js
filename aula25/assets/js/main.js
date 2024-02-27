"use strict";

// Return das funções

function soma(a, b) {
  return a + b;
}
console.log(soma(5, 2));

// document.addEventListener("click", function () {
//   document.body.style.background = "#ff0000";
// });

function criaMultiplicador(multplicador) {
  return function (n) {
    return n * multplicador;
  };
}

console.log(criaMultiplicador(3)(10));

// Clousers

function retornaFuncao() {
  const nome = "thales";
  return function () {
    return nome;
  };
}

const funcao = retornaFuncao();
console.dir(funcao);
