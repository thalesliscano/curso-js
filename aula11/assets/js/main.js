"use strict";

const elementos = [
  { tag: "p", texto: "Frase1" },
  { tag: "div", texto: "Frase2" },
  { tag: "footer", texto: "Frase3" },
  { tag: "section", texto: "Frase4" },
];

const container = document.querySelector(".container");

function criaElementos(arrayElementos) {
  let elemento;
  let elementoContainer = document.createElement("div");

  for (let i = 0; i < arrayElementos.length; i++) {
    let { tag, texto } = arrayElementos[i];
    elemento = document.createElement(tag);
    elemento.textContent = texto;
    elementoContainer.appendChild(elemento);
    container.appendChild(elementoContainer);
  }
  return elemento;
}

criaElementos(elementos);
