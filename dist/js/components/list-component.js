import { adicionarTarefaAoDOM } from "./tarefas-salvas-component.js";
export function novaTarefa(tarefa) {
    adicionarTarefaAoDOM(tarefa);
    const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas")) || [];
    tarefasSalvas.push(tarefa);
    localStorage.setItem("tarefas", JSON.stringify(tarefasSalvas));
}
