import Tarefa from "../types/Tarefa.js";
import { adicionarTarefaAoDOM, lista } from "./tarefas-salvas-component.js";

export function novaTarefa(tarefa: Tarefa): void {
  adicionarTarefaAoDOM(tarefa);

  const tarefasSalvas: Tarefa[] =
    JSON.parse(localStorage.getItem("tarefas")) || [];
  tarefasSalvas.push(tarefa);
  localStorage.setItem("tarefas", JSON.stringify(tarefasSalvas));
}

lista.addEventListener("click", (event: Event): void => {
  const alvo = event.target as HTMLElement;

  if (alvo.classList.contains("list-delete")) {
    console.log(alvo);
    const li: HTMLLIElement = alvo.closest("li");
    removerTarefa(li.id);
  }
});

function removerTarefa(id: string): void {
  document.getElementById(id).remove();

  let tarefasSalvas: Tarefa[] =
    JSON.parse(localStorage.getItem("tarefas")) || [];
  tarefasSalvas = tarefasSalvas.filter((tarefa) => tarefa.id !== parseInt(id));
  localStorage.setItem("tarefas", JSON.stringify(tarefasSalvas));
}
