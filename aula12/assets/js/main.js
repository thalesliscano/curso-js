"use strict";

const frutas = ["Pera", "Maçã", "Uva"];

// Outros for
// for normal
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// for interável dentro de arrays e objetos
for (let indice in frutas) {
  console.log(frutas[indice]);
}

const pessoa = {
  nome: "Thales",
  sobreNome: "Liscano",
  Idade: 21,
};

console.log("-------");

// Pega intera uma chave a cada iteração
for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}
