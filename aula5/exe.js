"use strick";

/**Escrever no index.
 * Seu nome é: dfdffd
Seu nome tem ______ letras
A segunda letra do seu nome é: ______
Qual o primeiro índice da letra LETRA no seu nome? ______
Qual o último índice da letra LETRA no seu nome? ______
As últimas 3 letras do seu nome são: ______
As palavras do seu nome são: ______
Seu nome com letras maiúsculas: ______
Seu nome com letras minúsculas: ______
 */

let nome = prompt("Qual é o seu nome completo: ");

document.body.innerHTML += `Seu nome é <strong>${nome}.</strong><br>`;
document.body.innerHTML += `Seu nome tem <strong>${nome.length} letras.</strong><br>`;
document.body.innerHTML += `Qual o primeiro índice da letra LETRA no seu nome? <strong>${nome.indexOf(
  "t"
)}</strong><br>`;
document.body.innerHTML += `Qual o último índice da letra LETRA no seu nome? <strong>${nome.lastIndexOf(
  "o"
)}</strong><br>`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${nome.slice(
  -3
)}</strong><br>`;
document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(
  " "
)}</strong><br>`;
document.body.innerHTML += `Seu nome com letras maiusculas: <strong>${nome.toUpperCase()}</strong><br>`;
document.body.innerHTML += `Seu nome com letras minúsculas: <strong> ${nome.toLowerCase()}</strong><br>`;
