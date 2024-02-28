"use strict";

// Funcões defineProperty - defineProperties
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave
    value: estoque, // atribui um valor
    writable: true, // controla se pode ou não ser alterado
    configurable: true, // configurável --> caso falso, não pode repetir essa configuração
  });
}

const p1 = new Produto("Camiseta", 20, 3);
p1.estoque = 500;
console.log(p1);
