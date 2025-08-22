type Task = {
  text: string;
  completed: boolean;
};

let todoApp = {
    tasks: [] as Task[],
    addTask(task: string, completed: boolean) {
        this.tasks.push({
          text: task,
          completed: completed,
        });
        this.renderTasks();
    },
    toggleTask(index: number) {
        const task = this.tasks[index];
        if (task) {
          task.completed = !task.completed;
        }
         this.renderTasks();
    },
    removeCompletedTask() { // remove when task completed true
        this.tasks = this.tasks.filter(
            task => !task.completed
        )
        this.renderTasks();
    },
    renderTasks() {
        let taskList = document.getElementById("taskList");
        if (taskList) {
            taskList.innerHTML = "";
        }

        this.tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.textContent = task.text;
            li.onclick = () => this.toggleTask(index);

            if (task.completed) {
              li.classList.add("completed"); // id completed
            }
            taskList?.appendChild(li);
        });
    }
}

document.getElementById("addTask")?.addEventListener("click", () => {
    let taskInput = document.getElementById("taskInput") as HTMLInputElement;
    todoApp.addTask(taskInput.value, false);

    taskInput.value = "";
});

todoApp.addTask("Learn Javascript", false);
todoApp.addTask("Learn Swift", true);