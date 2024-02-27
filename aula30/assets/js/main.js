"use strict";

function Calculadora() {
  this.display = document.querySelector("#display");
  this.valores = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  this.oepradores = [".", "+", "-", "*", "/", "(", ")", "Enter"];
  this.teclasEscape = ["Backspace", "Escape"];

  this.inicia = () => {
    this.capturaCliques();
    this.capturaTeclas();
    this.focus();
  };
  this.focus = () => this.display.focus();

  this.capturaCliques = () => {
    document.addEventListener("click", (event) => {
      const el = event.target;
      if (el.classList.contains("btn-num")) this.addNumDisplay(el);

      if (el.classList.contains("btn-clear")) {
        this.clearDisplay();
        this.focus();
      }

      if (el.classList.contains("btn-del")) {
        this.apagarUm();
        this.focus();
      }

      if (el.classList.contains("btn-eq")) this.realizaConta();
    });
  };

  this.capturaTeclas = () => {
    document.addEventListener("keydown", (event) => {
      const el = event.key;
      if (this.valores.includes(el) || this.oepradores.includes(el)) {
        const button = document.querySelector(`[data-key="${el}"]`);
        button.classList.add("ativo");

        setTimeout(() => {
          button.classList.remove("ativo");
        }, 200);

        if (el === "Enter") this.realizaConta();
      }
      if (this.teclasEscape.includes(el)) {
        const button = document.querySelector(`[data-key="${el}"]`);
        button.classList.add("ativo");

        setTimeout(() => {
          button.classList.remove("ativo");
        }, 200);

        if (el === "Escape") {
          this.clearDisplay();
          this.focus();
        }

        if (el === "Backspace") this.focus();
      }
    });
  };
  this.addNumDisplay = (el) => {
    let valor = el.innerText;
    this.display.value += valor;
    console.log(this.display.value);
  };
  this.clearDisplay = () => (this.display.value = "");

  this.apagarUm = () => (this.display.value = this.display.value.slice(0, -1));

  this.realizaConta = () => {
    try {
      this.focus();
      this.display.value = eval(this.display.value);

      if (!this.display.value) {
        alert("Conta inválida!");
        return;
      }
    } catch (e) {
      alert("Conta inválida!");
    }
  };
}

const calculadora = new Calculadora();
calculadora.inicia();
