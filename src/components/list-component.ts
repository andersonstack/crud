import Tarefa from "../types/Tarefa.js";
import { adicionarTarefaAoDOM } from "./tarefas-salvas-component.js";

export function novaTarefa(tarefa: Tarefa) {
  adicionarTarefaAoDOM(tarefa);

  const tarefasSalvas: Tarefa[] =
    JSON.parse(localStorage.getItem("tarefas")) || [];
  tarefasSalvas.push(tarefa);
  localStorage.setItem("tarefas", JSON.stringify(tarefasSalvas));
}
