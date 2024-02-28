"use strict";
//               -5      -4        -3         -2       -1
//                0       1         2          3        4
const nomes = ["Maria", "joão", "Eduardo", "Gabriel", "Julia"];
const nomes1 = ["Maria", "joão", "Eduardo", "Gabriel", "Julia"];

// nomes.splice(indice, delete, elementos para adicioinar)
// nomes.splice(indice, delete, elem1,elem2,...)

const removidos = nomes.splice(3, 2, "Luiz", "Otávio"); // remove nenhum itens
// Caso eu queira remover todos os valores
const removidos2 = nomes1.splice(-2, Number.MAX_VALUE);
console.log(nomes, removidos);
console.log("2", removidos2);

console.log("-----------------------------------------------------------");

/**
Remova os elementos '20' e '30' do array numeros utilizando o método splice(). Certifique-se de que esses elementos foram removidos e armazene-os em uma variável chamada elementosRemovidos.

Adicione os elementos '25' e '27' entre '10' e '40' no array numeros utilizando o método splice(). Certifique-se de que esses elementos foram adicionados corretamente.

Substitua o elemento '40' pelo elemento '45' no array numeros utilizando o método splice(). Certifique-se de que a substituição ocorreu com sucesso.

Adicione os elementos '60', '70' e '80' ao final do array numeros utilizando o método splice(). Certifique-se de que esses elementos foram adicionados corretamente.
 */
let numeros = [10, 20, 30, 40, 50];

const elementosRemovidos = numeros.splice(1, 2);
console.log(elementosRemovidos);

numeros.splice(1, 0, 25, 27);
console.log(numeros);

numeros.splice(3, 1, 45);
console.log(numeros);

numeros.splice(numeros.length, 0, 60, 70, 80);

console.log(numeros);
