import Tarefa from "../types/Tarefa.js";

const lista: HTMLUListElement = document.querySelector(".list");

export function novaTarefa(tarefa: Tarefa) {
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
          <button class="list-delete">Exluir</button>
        </div>
    </li>
    `;
}
