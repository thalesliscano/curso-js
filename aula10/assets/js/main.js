"use strick";

let date = new Date();

function conferirDiaSemana(dia) {
  let diaSemana;
  switch (dia) {
    case 0:
      diaSemana = "domingo";
      return diaSemana;
    case 1:
      diaSemana = "Segunda";
      return diaSemana;
    case 2:
      diaSemana = "Terça";
      return diaSemana;
    case 3:
      diaSemana = "Quarta";
      return diaSemana;
    case 4:
      diaSemana = "Quinta";
      return diaSemana;
    case 5:
      diaSemana = "Sexta";
      return diaSemana;
    case 6:
      diaSemana = "Sábado";
      return diaSemana;
    default:
      diaSemana = "Erro! Dia inválido.";
  }
}

function conferirMes(mes) {
  let mesAtual;
  switch (mes) {
    case 0:
      mesAtual = "Janeiro";
      return mesAtual;
    case 1:
      mesAtual = "Fevereiro";
      return mesAtual;
    case 2:
      mesAtual = "Março";
      return mesAtual;
    case 3:
      mesAtual = "Abril";
      return mesAtual;
    case 4:
      mesAtual = "Maio";
      return mesAtual;
    case 5:
      mesAtual = "Junho";
      return mesAtual;
    case 6:
      mesAtual = "Julho";
      return mesAtual;
    case 7:
      mesAtual = "Agosto";
      return mesAtual;
    case 8:
      mesAtual = "Setembro";
      return mesAtual;
    case 9:
      mesAtual = "Outubro";
      return mesAtual;
    case 10:
      mesAtual = "Novembro";
      return mesAtual;
    case 11:
      mesAtual = "Dezembro";
      return mesAtual;
    default:
      mesAtual = "Erro! Mes inválido.";
  }
}

function formatedDate(date) {
  return date < 10 ? `0${date}` : date;
}

function formatCurrentDate(date) {
  const dayOfTheWeek = conferirDiaSemana(date.getDay());

  const day = date.getDate();
  const month = conferirMes(date.getMonth());
  const year = date.getFullYear();

  const hours = formatedDate(date.getHours());
  const minutes = formatedDate(date.getMinutes());

  return `${dayOfTheWeek}, ${day} de ${month} de ${year} ás ${hours}:${minutes}`;
}

const contentDiv = (document.getElementById("content").innerText =
  formatCurrentDate(date));

// Forma mais fácil de fazer isso :
// Veja o resultado no console

const exeDate = new Date();
const opcoes = {
  dateStyle: "full",
  timeStyle: "short",
};

console.log(exeDate.toLocaleString("pt-BR", opcoes));
