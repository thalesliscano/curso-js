"use strict";

const produto = { nome: "Caneca", preco: 1.8 };
const outraCoisa = { ...produto, material: "porcelana" };

const outraCoisa1 = Object.assign({}, produto); // copiar o o bejto ===> ele aponta o pro {} o valor de obj que vc quer

outraCoisa.nome = "mesa ";
console.log(produto);
console.log(outraCoisa);
console.log(outraCoisa1);

console.log("=======================");
const produto2 = { nome: "prod", preco: 1.8 };

Object.defineProperty(produto2, "nome", {
  writable: false,
  configurable: false,
});
delete produto2.preco;
console.log(Object.getOwnPropertyDescriptor(produto2, "nome")); // pega o as objeto contido dentro de defineProperty
console.log(produto2);
