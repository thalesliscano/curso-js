"use strick";
/**
 * valor de A == C, B == C, C == A
 */

let A = "A";
let B = "B";
let C = "C";
// let aux;

// aux = A;
// A = C;
// B = C;
// C = aux;

[A, B, C] = [B, C, A]; // tem essa opcão.

console.log(`A == ${A}, B == ${B}, C == ${C}`); // A == C, B == C, C == A
