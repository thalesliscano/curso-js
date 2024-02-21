"use strict";
// Tratamento de erro js
// tente fazer isso

try {
  console.log(thales);
  //E se der erro vai cair no bloco catch{}
} catch (err) {
  console.log("error no console.log", err);
}
console.log("--------------------------------------------------");
console.log("--------------------------------------------------");

//  verificar se y e x são números

function saoNum(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    // lança um exceção quando você lança está indicando que algo excepicional e possivelmente problemático ocorreu durante a execução do código
    throw new Error("x e y precisam ser num");
  }
  return x + y;
}
// Se algo ocorro no blco try, ele passa pro bloco catch pegar o erro
try {
  console.log(saoNum(1, 2));
  console.log(saoNum("1", 2));
} catch (err) {
  // console.log(err);
  console.log("alguma coiisa mais amigável pro usuário");
}

console.log("--------------------------------------------------");
console.log("--------------------------------------------------");

try {
  // console.log(a);
  console.log("Abri o arquivo");
  console.log("Manipulei o arquivo e gerou erro"); //-|
  console.log("Fechei o arquivo"); //Não executa   // |
} catch (err) {
  //------------------------------------------------- |
  if (1 > 2) {
    //----------------------------------------------- |
    console.log("sim"); //----------------------------|
  } //------------------------------------------------|
  console.log("tratando error"); //<------------------|
} finally {
  console.log("FINALLY: Eu sempre sou executado");
}

console.log("--------------------------------------------------");
console.log("--------------------------------------------------");

try {
  // console.log(a);
  console.log("Abri o arquivo");
  console.log("Manipulei o arquivo e gerou erro"); //-|
  console.log("Fechei o arquivo"); //Não executa    // |

  try {
    console.log(b);
  } catch (err) {
    console.log("erro tb");
  } finally {
    console.log("FINALLY: Vou ser executado também");
  }
} catch (err) {
  // |
  console.log("tratando error"); //<-------------------|
} finally {
  console.log("FINALLY: Eu sempre sou executado");
}

console.log("--------------------------------------------------");
console.log("--------------------------------------------------");
function verficarDate(date) {
  if (date && !(date instanceof Date)) {
    throw new TypeError("Esperando instancia de Date");
  }
  if (!date) {
    date = new Date();
  }
  return date.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}
try {
  // console.log(verficarDate(new Date()));
  const data = new Date("01-01-1970 14:45:15");
  const hora = verficarDate(11);
} catch (err) {
  // tratar erro
  console.error(`Error ${err}`)
} finally {
  console.log("tenha um bom dia");
}
