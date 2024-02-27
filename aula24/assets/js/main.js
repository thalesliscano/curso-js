"use strict";
falaOi();

function falaOi() {
  console.log("Oie");
}

// função são obejtos de primeira class( First-class objects)

// Expressão de função

const souUmDado = function () {
  console.log("Sou um dado");
};

function exeFunc(funcao) {
  funcao();
}

exeFunc(souUmDado);

// arrow function

const funcaoArrow = () => {
  console.log("Sou um arrow function");
};

funcaoArrow();

// setInterval(funcaoArrow, 1000); //executa a cada 1 segundo

// Dentro de um obejto
const obj = {
  falar: () => {
    console.log("Estou falando...");
  },
};

const ob1 = {
  falar() {
    console.log("Estou falando");
  },
};

ob1.falar();

console.log(
  "----------------------------------------------------------------------------------"
);

// outra aula
// Mesmo se vc enviar um parâmtro pro js em uma função que você não declarou nenhum parâmetro ele funciona
// Apenas funções declaradas com funciton() ==> arguments
function funcao() {
  console.log("OIE");
  console.log(arguments);
  console.log(arguments[0]);
  console.log(arguments[10]);

  let total = 0;

  for (let arg of arguments) {
    total += arg;
  }
  console.log(total);
}

funcao(0, 1, 2, 3, 4, 5, 6, 7, 9, 9, 10);

console.log(
  "----------------------------------------------------------------------------------"
);

// Quando você faz ao contráio que é passar poucos parâmetros, mas declarou muitos parâmtros, ele irá retornar undefined para os não existentes
function funcao2(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f);
}
funcao2(1, 2, 3);

function funcao3(a, b = 3, c = 5) {
  // b = b || 0;
  console.log(a + b + c);
}

// Caso passar um falor nulo ou 0, e queria que o valor do parâmetro assume o valor setado dentro da função no caso ali encima é function funcao3 (a, b = 3, c = 5){}

// Única forma de resolver isso é declarando com undefined
funcao3(2, "10", 20); // 21020
funcao3(2, 0, 20); // 22
funcao3(2, undefined, 20); // 25

console.log(
  "----------------------------------------------------------------------------------"
);
// Atribuição via desestruturação
function funcao4({ nome, sobronome, idade }) {
  const obj = { nome, sobronome, idade };
  console.log(obj);
}

funcao4({ nome: "Thales", sobronome: "Liscano", idade: 21 });

function funcao5([nome, sobronome, idade]) {
  const obj = [nome, sobronome, idade];
  console.log(obj);
}
funcao5(["thales", "liscano", 21]);
console.log("--------------------------------------------------------");

// operador de ...rest ==> que deve ser sempreo último parâmetro
function conta(op, acc, num) {
  console.log(op, acc, num);
}

conta("+", 0, [20, 30, 40, 50]);

// seria a mesma coisa que fazendo isso aqui
function conta1(op, acc, ...nums) {
  console.log(op, acc, nums);
  for (let num of nums) {
    if (op === "+") {
      acc += num;
    } else if (op === "-") {
      acc -= num;
    } else if (op === "/") {
      acc /= num;
    } else {
      acc *= num;
    }
    console.log(num);
  }
  console.log(acc);
}

conta1("*", 0, 20, 30, 40, 50);

console.log("--------------------------------------------------------");
