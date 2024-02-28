"use strict";
"use strict";

// Definindo um array de nomes
const nomes = ["Thales", "Liscano", "Otávio"];

// Copiando o array 'nomes' para o array 'novo' usando o operador spread ('...')
const novo = [...nomes]; // Aqui usamos o operador spread para criar uma cópia de 'nomes' para 'novo'
console.log(nomes); // Imprime o array original 'nomes'

// Removendo o último elemento do array 'nomes' e armazenando-o na variável 'removido'
const removido = nomes.pop();

// Removendo o primeiro elemento do array 'nomes' e armazenando-o na variável 'removidoComeço'
const removidoComeço = nomes.shift(); // Aqui usamos shift() para remover o primeiro elemento do array 'nomes'

// Adicionando novos elementos ao início do array 'nomes'
nomes.unshift("João");
nomes.unshift("Mauricio");

// Transformando o array 'nomes' em uma string usando o método 'join' (provavelmente o autor se referiu a esse método)
// Entretanto, 'split' não é usado aqui, mas 'join' para transformar o array em string.
console.log(nomes.join(", "), removido, removidoComeço); // Imprime os elementos do array 'nomes' como uma string, seguido dos elementos removidos

// Imprimindo o array 'novo', que é uma cópia do array 'nomes' antes das modificações
console.log(novo); // Imprime a cópia do array 'nomes' antes das modificações
