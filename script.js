function addTask() {
    const newTaskInput = document.getElementById("new-task");
    const taskText = newTaskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("task-list");

        const taskItem = document.createElement("li");
        taskItem.className = "task";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", toggleTask);

        const taskTextElement = document.createElement("span");
        taskTextElement.textContent = taskText;

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-btn";
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", deleteTask);

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskTextElement);
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);

        newTaskInput.value = "";
    }
}

function toggleTask(event) {
    const taskTextElement = event.target.nextSibling;
    taskTextElement.style.textDecoration = event.target.checked ? "line-through" : "none";
}

function deleteTask(event) {
    const taskItem = event.target.parentNode;
    taskItem.remove();
}