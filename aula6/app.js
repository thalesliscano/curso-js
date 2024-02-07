"use strick";

const yourNumber = Number(prompt("Digite seu número: "));

document.body.innerHTML += `<h1> Seu número é: ${yourNumber}</h1> <br>`;
document.body.innerHTML += `<h2> Raiz quadrada do seu número é: ${Math.sqrt(
  yourNumber,
  2
)}</h2> <br>`;
document.body.innerHTML += `<h2> Seu número é interio: ${Number.isInteger(
  yourNumber
)}</h2> <br>`;
document.body.innerHTML += `<h2> Seu número é NaN: ${Number.isNaN(
  yourNumber
)}</h2> <br>`;
document.body.innerHTML += `<h2> Arredondado pra baixo: ${Math.floor(
  yourNumber
)}</h2> <br>`;
document.body.innerHTML += `<h2> Arredondado pra cima: ${Math.ceil(
  yourNumber
)}</h2> <br>`;
document.body.innerHTML += `<h2> Com duas casas decimais: ${yourNumber.toFixed(
  2
)}</h2> <br>`;
