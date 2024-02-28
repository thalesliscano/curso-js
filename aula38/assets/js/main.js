"use strict";

const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let valor of a1) {
  console.log(valor);
}
let tol = 0;
a1.forEach((valor, ind, arr) => (tol += valor));
console.log(tol);
