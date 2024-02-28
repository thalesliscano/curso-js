"use strict";

// Filter + map + reduce
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numPar = numeros
  .filter((valor) => valor % 2 === 0)
  .map((valor) => valor * 2)
  .reduce((acc, valor) => (acc += valor));

console.log(numPar);
const pessoas = [
  {
    nome: "Thales",
    idade: 21,
  },
  {
    nome: "Maria",
    idade: 23,
  },
  {
    nome: "Beatriz",
    idade: 55,
  },
  {
    nome: "Rosana",
    idade: 19,
  },
  {
    nome: "Wallace",
    idade: 43,
  },
  {
    nome: "henrinilson",
    idade: 10,
  },
];
