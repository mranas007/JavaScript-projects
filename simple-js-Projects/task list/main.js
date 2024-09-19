
let tasks = [];

const addTask = () => {
    const taskInput = document.getElementById("taskInput");
    const taskValue = taskInput.value.trim();

    if (taskValue !== "") {
        tasks.push({ text: taskValue, completed: false });
        taskInput.value = ""
        displayTasks();
    } else {
        popUp()
    }
}

const displayTasks = () => {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        // Add a checkbox to mark the task as completed 
        const listItem = document.createElement("li");

        // Add a button to remove the task
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = () => removeTask(index);
        listItem.appendChild(removeButton);

        // Add a CheckBox input to task compeleted
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox"
        checkbox.checked = task.completed
        checkbox.onclick = () => toggleTask(index);
        listItem.appendChild(checkbox);

        // Add task list to the list item 
        const taskTest = document.createElement('span');
        taskTest.textContent = task.text;
        listItem.appendChild(taskTest);

        taskList.appendChild(listItem)

    });
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks()
}

function removeTask(index) {
    if (tasks[index].completed === true) {
        tasks.splice(index, 1)
        displayTasks()
    }
}
displayTasks()


// PopUp functionality 

const alert = document.querySelector('#alert');
const closeUp = document.querySelector('#closeUp');

function popUp() {
    alert.style.top = "40%"
}

closeUp.addEventListener('click', () => {
    alert.style.top = "-100%"
})


// window.addEventListener('click', () => {
//     if (alert.style.top == "40%") {
//         alert.style.top = "-100%"
//     }else{
//         alert("sorry")
//     }
// })

// window.addEventListener('click', (event) => {
//     if (!popUp.contains(event.target) && event.target !== button) {
//         popUp.style.top = '-100%';
//     }
// });