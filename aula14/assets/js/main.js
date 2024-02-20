"use strict";

const section = document.querySelector(".container");
console.log(section);

const paragrafo = section.querySelector(".paragrafos");
console.log(paragrafo);

const textos = paragrafo.querySelectorAll("p");
console.log(textos);

// Todos os estios carregados do body
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
const marginBody = estilosBody.margin;
console.log(backgroundColorBody);

// textos.forEach(function (el) {
//   el.style.background = backgroundColorBody;
//   el.style.color = "rgb(255,255,255)";
//   el.style.margin = "20px 0px";
// });

for (let p of textos) {
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = "rgb(255,255,255)";
  p.style.margin = "20px 0px";
}

//Outra forma
