import Tarefa from "../types/Tarefa.js";
import { gerarId } from "../utils/gerar-id.js";
import { novaTarefa } from "./list-component.js";

let $ = document.querySelector.bind(document);

const buttonForm: HTMLButtonElement = $("#form-button");
const inputTitle: HTMLInputElement = $("#title");
const inputDescription: HTMLTextAreaElement = $("#description");
const form: HTMLFormElement = $("#form");

buttonForm.addEventListener("click", (e) => {
  e.preventDefault();
  const newTarefa: Tarefa = {
    id: gerarId(),
    title: inputTitle.value,
    description: inputDescription.value,
  };
  novaTarefa(newTarefa);
  form.reset();
});
