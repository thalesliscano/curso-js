"use strict";

// const nome = "Thales Liscano Carvlho";
const nomes = ["thales", "beatriz", "maurício", "edson"];
console.log("FOR");
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}
console.log("--------------");
console.log("FORI");
for (let i in nomes) {
  console.log(nomes[i]);
}
console.log("--------------");

// Quando eu tiver um obj interavel, string, array

console.log("FOROF");
for (let i of nomes) {
  console.log(i);
}

console.log("--------------");
// forEach
// Precisa de um array
console.log("FOREACH");
nomes.forEach((el, indice, array) => {
  console.log(el, indice, array);
});
