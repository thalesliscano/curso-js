"use strict";

// selecionando os elementos da pagina
const container = document.querySelector(".container");
const funcionalidiade = container.querySelector(".funcionalidiade");
const campoTarefa = funcionalidiade.querySelector(".campo-tarefa");
const ul = container.querySelector("ul");
const btnAdd = funcionalidiade.querySelector(".btn-add");

const criaLi = (conteudo) => {
  const task = document.createElement("li");
  task.textContent = conteudo + " ";
  ul.appendChild(task);
  return task;
};
const criaTarefa = (texto) => {
  const task = criaLi(texto);
  criaBtnApagar(task);
  limpaCampo();
  salvaTarefa(task);
};

const criaBtnApagar = (task) => {
  const btnApagar = document.createElement("button");
  btnApagar.textContent = "Apagar";
  task.appendChild(btnApagar);
  btnApagar.classList.add("btn-apagar");
};

const limpaCampo = () => {
  campoTarefa.value = "";
  campoTarefa.focus();
};

const salvaTarefa = () => {
  const tarefasli = ul.querySelectorAll("li");
  const listaTarefas = [];
  for (let task of tarefasli) {
    let textTask = task.innerText.replace("Apagar", "").trim();
    listaTarefas.push(textTask);
  }
  const tarefasJSON = JSON.stringify(listaTarefas);
  localStorage.setItem("task", tarefasJSON);
};

const removerTarefa = (btnApagar) => {
  btnApagar.parentElement.remove();
  salvaTarefa();
};

const adicionarTarefasSalvas = () => {
  const task = localStorage.getItem("task");
  const listaTarefas = JSON.parse(task);
  for (let task of listaTarefas) {
    criaTarefa(task);
  }
};

document.addEventListener("click", (e) => {
  const el = e.target;
  if (el.className === "btn-add") {
    if (!campoTarefa.value) return;
    criaTarefa(campoTarefa.value);
    limpaCampo();
  } else if (el.className === "btn-apagar") {
    removerTarefa(el);
    limpaCampo();
  }
});

document.addEventListener("keypress", (e) => {
  if (!campoTarefa.value) return;
  const el = e.key;
  if (el === "Enter") {
    criaTarefa(campoTarefa.value);
    limpaCampo();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  campoTarefa.focus();
});

adicionarTarefasSalvas();
