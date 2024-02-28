"use stric";

const { sub } = require("date-fns");

/**
 * Remova o último elemento do array frutas utilizando o método pop(). Em seguida, armazene o elemento removido em uma variável chamada ultimaFruta.

Adicione o elemento 'abacaxi' ao início do array frutas utilizando o método unshift().

Remova o primeiro elemento do array frutas utilizando o método shift(). Em seguida, armazene o elemento removido em uma variável chamada primeiraFruta.

Crie um novo array chamado outrasFrutas contendo os elementos 'pêssego', 'morango' e 'kiwi'. Em seguida, combine os arrays frutas e outrasFrutas usando o operador spread (...). Armazene o resultado em uma variável chamada frutasComOutras.

Converta o array frutasComOutras em uma string utilizando o método join() com um traço ('-') como separador. Armazene o resultado em uma variável chamada frutasString.

Crie um novo array chamado subArray contendo os elementos do terceiro ao quinto elemento (inclusive) do array frutasComOutras utilizando o método slice(). Armazene o resultado em uma variável chamada subArray.
 */

let frutas = ["banana", "maçã", "laranja", "uva", "manga"];
const ultimaFruta = frutas.pop();
console.log(ultimaFruta);

frutas.unshift("abacaxi");
console.log(frutas);

const primeiraFruta = frutas.unshift();
console.log(primeiraFruta);

const outrasFrutas = ["pêssego", "morango", "kiwi"];

const frutasComOutras = [...frutas, ...outrasFrutas];
console.log(frutasComOutras);

const frutasString = frutasComOutras.join("-");
console.log(frutasString);

const subArray = frutasComOutras.slice(0, -3);
console.log(subArray);
