"use strict";

// Filter
// Sempre vai retornar um array com a mesma quantidade de elementos ou menos
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const numerosMaiores = numeros.filter((valor, indice, array)
// const numerosMaiores = numeros.filter((valor, indice, array) => valor > 10);
const numerosMaiores = numeros.filter((valor, indice, array) => {
  console.log(valor, indice);
  return valor > 10;
});

console.log(numerosMaiores);

// for (let n of numeros) {
//   if (n > 10) {
//     numerosMaiores.push(n);
//     console.log(numerosMaiores);
//   }
// }

console.log("================================================");

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

// const nome = "thales";
// const filtro = nome[nome.length - 1];
// console.log(filtro);

// const pessoComNomeGrande = pessoas.filter((obj) => obj.nome.length > 7);
const pessoaIdadeMaior50 = pessoas.filter((obj) => obj.idade > 30);
const pessoaTerminaComA = pessoas.filter(
  (obj) => obj.nome[obj.nome.length - 1] == "a"
);
const pessoaTerminaComA1 = pessoas.filter((obj) =>
  obj.nome.toLocaleLowerCase().endsWith("a")
);
console.log(pessoaTerminaComA1);
