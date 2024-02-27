"use strict";

function criaCalculadora() {
  return {
    display: document.querySelector("#display"),
    valores: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    operadores: [".", "+", "-", "*", "/", "(", ")", "Enter"],
    teclasEscape: ["Backspace", "Escape"],
    focus: function () {
      this.display.focus();
    },
    inicia() {
      this.cliqueBotoes();
      this.pressionaTeclas();
      this.focus();
    },
    pressionaTeclas() {
      document.addEventListener("keypress", (e) => {
        const el = e.key;
        if (this.valores.includes(el) || this.operadores.includes(el)) {
          const button = document.querySelector(`[data-key="${el}"]`);
          button.classList.add("ativo");

          setTimeout(() => {
            button.classList.remove("ativo");
          }, 200);
        }
        if (el === "Enter") {
          this.realizaConta();
        }
      });

      document.addEventListener("keyup", (e) => {
        const el = e.key;
        if (this.teclasEscape.includes(el)) {
          if (el === "Escape") {
            this.clearDisplay();
          }
          this.focus();
          const button = document.querySelector(`[data-key="${el}"]`);
          button.classList.add("ativo");

          setTimeout(() => {
            button.classList.remove("ativo");
          }, 200);
        }
      });
    },
    cliqueBotoes() {
      document.addEventListener("click", (e) => {
        const el = e.target;
        if (el.classList.contains("btn-num")) {
          this.btnParadisplay(el.innerText);
        }
        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }
        if (el.classList.contains("btn-del")) {
          this.apagaUm();
          this.focus();
        }
        if (el.classList.contains("btn-eq")) {
          this.realizaConta();
        }
        console.log(el.classList.contains("btn-eq"));
      });
    },
    btnParadisplay(valor) {
      this.display.value += valor;
    },
    clearDisplay() {
      this.display.value = "";
    },
    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
      console.log(this.display.value);
    },
    realizaConta() {
      let conta = this.display.value;
      try {
        conta = eval(conta);
        if (!conta) {
          alert("Conta inválida");
          return;
        }
        this.display.value = conta;
        console.log(this.display.value);
      } catch (e) {
        alert("Conta inválida");
        return;
      }
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
