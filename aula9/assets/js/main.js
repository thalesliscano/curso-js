"use strick";
const form = document.querySelector("form");
const button = form.querySelector("button");
function selecinarCamposInputs() {
  const inputs = form.querySelectorAll("input");

  return inputs;
}

function extrairValores(tags) {
  const inputTags = tags;
  const valoresInputs = {};

  inputTags.forEach((each) => {
    valoresInputs[each.name] = each.value;
  });

  return valoresInputs;
}
function calcularImc(valorImc) {
  const resultadoImc = valorImc.peso / valorImc.altura ** 2;
  return Number(resultadoImc.toFixed(2));
}

function conferirTabelaValores(result) {
  console.log(result);
  let msg = "";
  if (result <= 18.5) {
    msg = "Abaixo do peso";
  } else if (result >= 18.5 && result <= 24.9) {
    msg = "Peso normal";
  } else if (result >= 25 && result <= 29.9) {
    msg = "Sobrepeso";
  } else if (result >= 30 && result <= 34.9) {
    msg = "Obesidade grau 1";
  } else if (result >= 35 && result <= 39.9) {
    msg = "Obesidade grau 2";
  } else {
    msg = "Obesidade grau 3";
  }
  return msg;
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const valoresImc = extrairValores(selecinarCamposInputs());
  const tagResposta = document.createElement("div");

  if (valoresImc.peso === "" || valoresImc.altura === "") {
    tagResposta.textContent = `Valor inválido! Verifique se todos os campos foram preenchidos corretamente.`;
    tagResposta.classList.add("mensagem-invalida");
  } else if (!isNaN(valoresImc.peso) && !isNaN(valoresImc.altura)) {
    const resultImc = calcularImc(valoresImc);
    tagResposta.textContent = `${conferirTabelaValores(resultImc)}`;
    tagResposta.classList.add("mensagem-valida");
  } else {
    tagResposta.textContent = `Valor inválido! Certifique-se de inserir números válidos.`;
  }
  button.insertAdjacentElement("afterend", tagResposta);
  setTimeout(() => {
    tagResposta.remove();
  }, 3000);
});
