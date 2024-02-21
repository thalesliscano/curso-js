"use strict";
// EXERCÍCIOS DE LÓGICA
// Escreva uma função que recebe 2 números e retorne o maior deles
const getMaiorNum = (num1, num2) => {
  return Math.max(num1, num2);
};

const getMaiorNum1 = (num1, num2) => Math.max(num1, num2);

console.log(getMaiorNum(45, 50));
console.log(getMaiorNum1(435, 50));

console.log("-------------------------------------------");
/**
 *Escreva uma função chamada ePaisagem que receba dois argumentos, largura e altura de uma imagem (number), retorne true se a imagem estiver no modo paisagem
 */
// Sò precisa retornar a condicional por que já retorna true e false
const ePaisagem = (largura, altura) => largura > altura;

console.log(ePaisagem(10000, 234344300));

console.log("-------------------------------------------");
/**
 * Escreva uma função que retorne um número e o seguinte:
 * Num é div por 3 = FIzz
 * Num é div por 5 = Buzz
 * Num é div por 3 e 5 = FizzBuzz
 * Num não div por 3 e 5 = Próprio num
 * Checkar se o num é um num
 * Use a função com  nums de 0 a 100
 */

const calculos = (num) =>
  typeof num === "number"
    ? num % 3 == 0 && num % 5 == 0
      ? "FizzBuzz"
      : num % 3 == 0
      ? "Fizz"
      : num % 5 == 0
      ? "Buzz"
      : num
    : NaN;

let min = 0;

while (min <= 100) {
  console.log(calculos(min));
  min++;
}
