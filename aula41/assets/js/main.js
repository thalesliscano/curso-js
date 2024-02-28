"use strict";

// Funcões defineProperty - defineProperties
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  let estoquePriv = estoque;

  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave
    configurable: true,
    set: (valor) => {
      if (typeof valor !== "number") {
        throw new TypeError("mensagem");
      }
      estoquePriv = valor;
    },
    get: () => {
      return estoquePriv;
    },
  });
}

const p1 = new Produto("Camiseta", 20, 3);
console.log(p1);
p1.estoque = "500";
console.log(p1.estoque);
