"use strict";

//Selecionando elementos no HTML
const container = document.querySelector(".container");
const inputTarefa = container.querySelector(".input-tarefa");
const btnTarefa = container.querySelector(".btn-tarefa");
const tarefas = container.querySelector(".tarefas");
let tarefa;
const criaLi = (conteudo) => {
  tarefa = document.createElement("li");
  tarefa.classList.add("tarefa");
  tarefa.textContent = conteudo + " ";
  return tarefas.appendChild(tarefa);
};

const criaTarefa = (texto) => {
  const li = criaLi(texto);
  limpaInputTarefa();
  salvarTarefa();
  criaBotaoApagar(li);
};

const limpaInputTarefa = () => {
  inputTarefa.value = "";
  // Evento de focus para retornar ao input depois de usado
  // Aqui não estou fazendo um evento e sim mandadno o js fazer um focus nesse elemento
  inputTarefa.focus();
};

const criaBotaoApagar = (tarefa) => {
  const tagTarefa = tarefa;
  const btnApagar = document.createElement("button");
  btnApagar.setAttribute("class", "btn-apagar");
  btnApagar.setAttribute("title", "Apagar esta tarefa");
  // btnApagar.classList.add("btn-apagar-tarefa");
  btnApagar.textContent = "OFF TASK";
  tagTarefa.appendChild(btnApagar);
  // tagTarefa.insertAdjacentElement("afterend", btnApagar);
};

const salvarTarefa = () => {
  const liTarefas = tarefas.querySelectorAll("li");
  const listaDeTarefas = [];
  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace("OFF TASK", "").trim();
    listaDeTarefas.push(tarefaTexto);
  }
  const tarefaJSON = JSON.stringify(listaDeTarefas);
  console.log(tarefaJSON);
  // Salvar no browser setItem("nome que vou recupetar depois dnv", "valor")
  // Sò pode salvar strings
  localStorage.setItem("tarefas", tarefaJSON);
};

document.addEventListener("click", (e) => {
  const el = e.target;
  if (el.classList.value === "btn-tarefa") {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  } else if (el.classList.value === "btn-apagar") {
    el.parentElement.remove();
    salvarTarefa();
  }
});

inputTarefa.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

const adicionaTarefasSalvas = () => {
  const tarefas = localStorage.getItem("tarefas");
  const listaDeTarefas = JSON.parse(tarefas);
  console.log(listaDeTarefas);
  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
};

adicionaTarefasSalvas();
