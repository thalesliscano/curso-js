"use strick";

/**
 * Fazer aparecer nome completo, idade, peso, altura e calcular o imc
 */
// const firstName = prompt("Digite seu primeiro nome: ");
// const secondName = prompt("Digite seu segundo nome: ");
// const age = prompt("Digite sua idade: ");
// const weight = prompt("Digite seu peso: ");
// const height = prompt("Digite sua altura: ");

const firstName = "Thales";
const secondName = "Liscano";
const age = 21;
const weight = 78.7;
const height = 1.8;

let calcImc = weight / height ** 2;

console.log(
  `${firstName} ${secondName} tem ${age} anos, pesa ${weight}\ntem ${height} de altura e seu IMC é de ${calcImc} `
);
