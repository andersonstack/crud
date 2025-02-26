import { adicionarTarefaAoDOM, lista } from "./tarefas-salvas-component.js";
export function novaTarefa(tarefa) {
    adicionarTarefaAoDOM(tarefa);
    const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas")) || [];
    tarefasSalvas.push(tarefa);
    localStorage.setItem("tarefas", JSON.stringify(tarefasSalvas));
}
lista.addEventListener("click", (event) => {
    const alvo = event.target;
    if (alvo.classList.contains("list-delete")) {
        console.log(alvo);
        const li = alvo.closest("li");
        removerTarefa(li.id);
    }
});
function removerTarefa(id) {
    document.getElementById(id).remove();
    let tarefasSalvas = JSON.parse(localStorage.getItem("tarefas")) || [];
    tarefasSalvas = tarefasSalvas.filter((tarefa) => tarefa.id !== parseInt(id));
    localStorage.setItem("tarefas", JSON.stringify(tarefasSalvas));
}
