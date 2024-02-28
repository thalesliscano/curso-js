"use strict";

//Concatenação de arrays
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const outro = [7, 8, 9];

const a3 = a1.concat(a2, outro, "Thales");

const a4 = [...a1, "Thales", ...a2];
console.log(a3);
console.log(a4);

// Exercicio

console.log("=======================================================");

/**
 * Imagine que você está desenvolvendo uma aplicação para gerenciar uma lista de compras. Você tem duas funções: uma para adicionar novos itens à lista e outra para calcular o total dos itens na lista. Implemente essas funções de forma que elas aceitem um número variável de argumentos usando o rest operator (...rest) e o spread operator (...) para manipular os arrays.

Crie a função adicionarItensLista que aceita uma lista de compras e um número variável de novos itens. Esta função deve adicionar os novos itens à lista de compras e retornar a lista atualizada.

Crie a função calcularTotalLista que aceita uma lista de compras e calcula o total dos itens nessa lista. Esta função deve ser capaz de aceitar um número variável de argumentos, representando os preços dos itens adicionais que não estão na lista de compras, e somá-los ao total.

Teste suas funções com diferentes cenários, adicionando itens à lista e calculando o total com e sem itens adicionais.

let listaDeCompras = ['arroz', 'feijão', 'macarrão'];
console.log(adicionarItensLista(listaDeCompras, 'carne', 'ovos')); // ['arroz', 'feijão', 'macarrão', 'carne', 'ovos']

console.log(calcularTotalLista(listaDeCompras, 5, 3, 2)); // Total: 10
 */

let listaDeCompras = ["arroz", "feijao", "macarrão"];

function addItensList(list, ...rest) {
  list.push(...rest);
  return list;
}
console.log(addItensList(listaDeCompras, "carne", "ovos"));
