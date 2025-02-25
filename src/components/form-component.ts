let $ = document.querySelector.bind(document);

const buttonForm: HTMLButtonElement = $("#form-button");
const inputTitle: HTMLInputElement = $("#title");
const inputDescription: HTMLTextAreaElement = $("#description");

buttonForm.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(inputTitle.value, inputDescription.value);
});
