"use strict";

const pessoa = new Object();
pessoa.nome = "Thales";
pessoa.sobrenome = "Liscano";

console.log(pessoa);

function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  };
}

const p1 = criaPessoa("Thales", "Liscano");
console.log(p1.nomeCompleto);

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

const p2 = new Pessoa("Beatriz", "Sanabria");
console.log(p2);
const p3 = new Pessoa("Miriam", "Sanabria");
console.log(p2);

p2.nome = "Jose";
console.log(p2);
