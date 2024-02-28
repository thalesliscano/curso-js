"use strict";

// Some todos os numeros --> Reduce
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce((acc, valorAtual, ind, arr) => {
  // if (valorAtual % 8 === 0) acc.push(valorAtual);
  acc += valorAtual;
  return acc;
  // }, []);
  // }, 0);
});

console.log(total);
const numerosEmDobro = numeros.map((valor) => valor * 2);

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
    idade: 100,
  },
];
// Quem for mais velho termina sendo o acc
const pessoaMaisVelha = pessoas.reduce((acc, current) =>
  current.idade > acc.idade ? current : acc
);

console.log(pessoaMaisVelha);
