var _a;
let todoApp = {
    tasks: [],
    addTask(task, completed) {
        this.tasks.push({
            text: task,
            completed: completed,
        });
        this.renderTasks();
    },
    toggleTask(index) {
        const task = this.tasks[index];
        if (task) {
            task.completed = !task.completed;
        }
        this.renderTasks();
    },
    removeCompletedTask() {
        this.tasks = this.tasks.filter(task => !task.completed);
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
            taskList === null || taskList === void 0 ? void 0 : taskList.appendChild(li);
        });
    }
};
(_a = document.getElementById("addTask")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    let taskInput = document.getElementById("taskInput");
    todoApp.addTask(taskInput.value, false);
    taskInput.value = "";
});
todoApp.addTask("Learn Javascript", false);
todoApp.addTask("Learn Swift", true);
export {};
//# sourceMappingURL=todolistFuncrtion.js.map