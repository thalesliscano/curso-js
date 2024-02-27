"use strict";
// Exercício calculadora
const container = document.querySelector(".container");
const calculadoraE = container.querySelector(".calculadora");
const entrada = calculadoraE.querySelector("#entrada");
const buttons = calculadoraE.querySelectorAll(".btn-calc");
entrada.focus();

function calculadora() {
  return {
    entrada: entrada.value,
    teclaEnterPressionada: false,
    valores: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    caracteres: [
      "(",
      ")",
      ".",
      "/",
      "*",
      "+",
      "-",
      "Escape",
      "Backspace",
      "Enter",
    ],
    verificaValor(valor) {
      if (
        this.valores.includes(valor) ||
        this.caracteres.includes(valor) ||
        valor === ""
      ) {
        if (valor === "Escape") {
          this.entrada = "0";
          entrada.value = this.entrada;
        }
        console.log(this.entrada);
        this.entrada += valor;
        if (valor === "Enter" && !this.teclaEnterPressionada) {
          this.teclaEnterPressionada = true;
          const valorString = this.entrada;
          this.calcularResultado(String(valorString));
        } else {
          // Se o valor não estiver presente nos arrays, limpa o input
          entrada.value = this.entrada;
        }

        // [data-key="${event.key}"]: Este é um seletor CSS que procura por um elemento que tenha um atributo data-key com um valor específico.
        const button = document.querySelector(`[data-key="${valor}"]`);
        if (button) {
          button.classList.add("ativo");
          setTimeout(() => {
            button.classList.remove("ativo");
          }, 200);
        }
      }
    },
    calcularResultado(valor) {
      console.log(valor);
    },
  };
}
document.addEventListener("keypress", (event) => {
  const valor = calculadora();
  const tecla = valor.verificaValor(event.key);
});

document.addEventListener("keydown", (event) => {
  const valor = calculadora();
  const tecla = valor.verificaValor(event.key);
});

document.addEventListener("click", (event) => {
  const elemento = event.target;
  const valor = elemento.dataset.key;
  if (
    valor === "0" ||
    valor === "1" ||
    valor === "2" ||
    valor === "3" ||
    valor === "4" ||
    valor === "5" ||
    valor === "6" ||
    valor === "7" ||
    valor === "8" ||
    valor === "9" ||
    valor === "C" ||
    valor === "(" ||
    valor === ")" ||
    valor === "." ||
    valor === "/" ||
    valor === "*" ||
    valor === "+" ||
    valor === "-" ||
    valor === "=" ||
    valor === "Escape" ||
    valor === "Backspace" ||
    valor === "Enter"
  ) {
    const button = document.querySelector(`[data-key="${valor}"]`);
    entrada.value += String(valor);
    console.log(entrada.value);
    if (button) {
      button.classList.add("ativo");
      setTimeout(() => {
        button.classList.remove("ativo");
      }, 200);
    }
  }
});
