export const lista = document.querySelector(".list");
function carregarTarefas() {
    const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas")) || [];
    tarefasSalvas.forEach((tarefa) => {
        adicionarTarefaAoDOM(tarefa);
    });
}
export function adicionarTarefaAoDOM(tarefa) {
    lista.innerHTML += `
     <li class="list-item" id=${tarefa.id}>
          <div class="list-item-div">
            <h3 class="list-title">${tarefa.title}</h3>
            <p class="list-description">
              ${tarefa.description}
            </p>
          </div>
          <div class="list-buttons">
            <button class="list-edit">Editar</button>
            <button class="list-delete" id="button-delete" >Excluir</button>
          </div>
      </li>
    `;
}
// onclick="removerTarefa('${tarefa.id}')"
document.addEventListener("DOMContentLoaded", carregarTarefas);
