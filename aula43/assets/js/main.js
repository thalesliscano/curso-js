"use strict";

// Prototype = oque foi criado pela primeira vez, servindo de modelo ou molde paras futuras produções
function Pessoa(nome, sobronome) {
  this.nome = nome;
  this.sobronome = sobronome;
  // this.nomeCompleto = () => {
  //   return "oiiiiiii" + this.nome + " " + this.sobronome;
  // };
}
Pessoa.prototype.nomeCompleto = () => {
  return this.nome + " " + this.sobronome;
};

const p1 = new Pessoa("Thales", "Liscano");
const p2 = new Pessoa("Beatriz", "Sanabria");

console.log(p1);
console.log(p2);

const pessoas = {
  nome: "Thales",
  sobrenome: "Liscano",
};
console.log(pessoas);

// Vai buscando nessa sequência
// p1 --> pessoa.prototype. --> Object.prototype

// Objetc Date
// data -> Date.prototype -> Obeject.prototype
