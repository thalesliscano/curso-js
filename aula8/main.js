"use strick";

/**
 * Selcionar os inputs
 *
 * Pegar os valores colocados
 *
 * Quando for enviado
 *
 * printar na tela os valores 1 por 1 que forem adicionados
 */

//

const arrPessoa = [];

let btnInput = document
  .getElementById("formulario")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    let nome = document.getElementById("nome").value;
    let sobreNome = document.getElementById("sobre-nome").value;
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    const objPessoa = {
      nome: nome,
      sobrenome: sobreNome,
      peso: peso,
      altura: altura,
    };

    arrPessoa.push(objPessoa);
    JSON.stringify(arrPessoa);
    const container = document.getElementById("container");

    const paragraph = document.createElement("p");
    paragraph.textContent = `Nome: ${objPessoa.nome} | Sobrenome: ${objPessoa.sobrenome} | Peso: ${objPessoa.peso} | Altura: ${objPessoa.altura}`;
    container.appendChild(paragraph);

    document.getElementById("nome").value = "";
    document.getElementById("sobre-nome").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
  });
console.log(arrPessoa);
