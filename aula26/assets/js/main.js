"use strict";

// factory functions --> funções fabrica

function criaPessoa(nome, sobroneme, a, p) {
  // Quando a função está dentro do obj, nos chamamos de método
  return {
    nome,
    sobroneme,
    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobroneme}`;
    },

    // Setter
    set nomeCompleto(valor) {
      console.log(valor);
      valor = valor.split(" ");
      this.nome = valor.shift();
      console.log(valor);
    },
    falaOI(assunto) {
      // Se eu colocar o this ele vai pegar o valor de nome dentro do objeto que foi declarado
      return `${this.nome}, que tem peso ${this.peso} está falando ${assunto}`;
    },
    peso: p,
    altura: a,
    // palavrinha get --> Getter --> Faz apenas obter o valor(notação de atributo)
    get imc() {
      const conta = this.peso / this.altura ** 2;
      return conta.toFixed(2);
    },
    IMC() {
      const conta = this.peso / this.altura ** 2;
      return conta.toFixed(2);
    },
  };
}

const p1 = criaPessoa("Thales", "Liscano", 1.8, 80);
console.log(p1.IMC());
console.log(p1.imc);
const p2 = criaPessoa("Beatriz", "Sanabria", 1.5, 55);
// console.log(p2.imc());
console.log(p1.falaOI("sobre js"));
console.log(p2.falaOI("sobre js"));

// Quanodo eu coloco o get na frente de um método, ele finge ser um atributo e não pode mais ser chamado(), e sim apenas retornado o valor que contém dentro do método
// console.log(p1.criaPessoa("Luiz", "Otávio", 1.8, 80));
console.log(p1.nomeCompleto);
p1.nomeCompleto = "Beatriz Sanabria Gomes";
console.log(p1.nomeCompleto);
