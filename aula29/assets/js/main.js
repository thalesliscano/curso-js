"use strict";
//função contrutora retorna objs === factory fabric
// Contrutora --> mudar as convenções como à criamos

function Pessoa(nome, sobrenome) {
  //Pessoa.nome
  // Privados
  const ID = 2323442;

  const metodoInterno = () => {
    if (ID) {
      console.log("Certo");
    }
  };
  // usando this ==> publicos
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.metodo = () => {
    console.log(this.nome + " " + ":Sou um método");
  };
}
// A palavrinha new cria um obj e faz o this apontar para pessoa que chamou
const p1 = new Pessoa("Thales", "Liscano");
const p2 = new Pessoa("Beatriz", "Sanabria");

console.log(p1.nome);
console.log(p2.sobrenome);
p2.metodo();
