import { gerarId } from "../utils/gerar-id.js";
import { novaTarefa } from "./list-component.js";
let $ = document.querySelector.bind(document);
const buttonForm = $("#form-button");
const inputTitle = $("#title");
const inputDescription = $("#description");
buttonForm.addEventListener("click", (e) => {
    e.preventDefault();
    const newTarefa = {
        id: gerarId(),
        title: inputTitle.value,
        description: inputDescription.value,
    };
    novaTarefa(newTarefa);
});
