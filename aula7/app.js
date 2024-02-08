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
let btnInput = document
  .getElementById("btn-input")
  .addEventListener("click", (event) => {
    event.preventDefault();
    let nome = document.getElementById("nome").value;
    let sobreNome = document.getElementById("sobre-nome").value;
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    localStorage.setItem("nome", nome);
    localStorage.setItem("sobreNome", sobreNome);
    localStorage.setItem("peso", peso);
    localStorage.setItem("altura", altura);

    window.location.href = "./second-page.html";
  });
