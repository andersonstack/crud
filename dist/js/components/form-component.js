let $ = document.querySelector.bind(document);
const buttonForm = $("#form-button");
const inputTitle = $("#title");
const inputDescription = $("#description");
buttonForm.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(inputTitle.value, inputDescription.value);
});
