const tarefa = {
    id: 1,
    title: "Tarefa 1",
    description: "Descrição da tarefa 1",
    completed: false,
    novaTarefa() {
        return `Tarefa ${this.id}: ${this.title} - ${this.description} - ${this.completed}`;
    },
};
export default tarefa;
