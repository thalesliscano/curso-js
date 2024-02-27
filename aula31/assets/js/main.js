"use strict";

// Função recursiva
// Oque é recursividade: Simplesmente uma função se chama de volta, se preocupar quando ela vai parar
function recursiva(max) {
  if (max >= 10) return;
  max++;
  console.log(max);

  recursiva(max);
}

recursiva(0);

console.log(
  "--------------------------------------------------------------------"
);

// Funções geradoras
function* geradora1() {
  // Codigo
  yield "Valor 1";
  // Codigo 2
  yield "Valor 2";
  // Codigo 3
  yield "Valor 3";
}
// Pra conseguir ter o valor de uma função geradora, é preciso do next ===> retorna um obj {value, done}
const g1 = geradora1();
// console.log(g1.next().value); //value == valor 1
// console.log(g1.next().value); //value == valor 2
// console.log(g1.next()); //{value:"Valor 3",done}
// console.log(g1.next()); // {value: undefined, done : true}

for (let valor of g1) {
  console.log(valor);
}

function* gerador2() {
  let cont = 0;

  while (true) {
    yield cont;
    cont++;
  }
}
const g2 = gerador2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

// Delegar tarefas para outras geradoras

console.log("___________------------------------------------------------");
function* geradora3() {
  yield 0;
  yield 1;
  yield 2;
}

function* geradora4() {
  // Chamando outra geradora *
  yield* geradora3();
  yield 3;
  yield 4;
  yield 5;
}

const g4 = geradora4();

for (let valor of g4) {
  console.log(valor);
}

function* geradora5() {
  yield function () {
    console.log("Vim do y1");
  };

  // se mudar pra yield o yield debaixo existe
  return function () {
    console.log("VIm do return");
  };

  yield function () {
    console.log("Vim do y2");
  };
}
const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
const func3 = g5.next().value;

func1();
func2();
// func3(); // Undefined
