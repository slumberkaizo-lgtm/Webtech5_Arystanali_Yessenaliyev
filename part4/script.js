const taskInput = document.querySelector("#taskInput");
const addTask = document.querySelector("#addTask");
const taskList = document.querySelector("#taskList");
const message = document.querySelector("#message");
const tasks = [];

addTask.addEventListener("click", () => {
    const text = taskInput.value.trim();
    if(text === ""){
        message.textContent = "Enter a task";
    } else {
        tasks.push({text: text, completed: false});
        taskInput.value = "";
        message.textContent = "";
        showTasks();
    }
});

function showTasks(){
    taskList.textContent = "";

    for(let i = 0; i < tasks.length; i++){
        const item = document.createElement("li");
        const check = document.createElement("input");
        const text = document.createElement("span");
        const remove = document.createElement("button");

        check.type = "checkbox";
        check.checked = tasks[i].completed;
        check.setAttribute("aria-label", "Complete " + tasks[i].text);
        text.textContent = tasks[i].text;
        remove.textContent = "Delete";

        if(tasks[i].completed){
            text.classList.add("completed");
        }

        check.addEventListener("change", () => {
            tasks[i].completed = check.checked;
            text.classList.toggle("completed", check.checked);
        });

        remove.addEventListener("click", () => {
            tasks.splice(i, 1);
            showTasks();
        });

        item.append(check);
        item.append(text);
        item.append(remove);
        taskList.append(item);
    }
}
