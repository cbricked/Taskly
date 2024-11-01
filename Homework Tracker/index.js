let listedTaskContainer = document.getElementById("listedTaskContainer");
let now = new Date();
let time = now.getHours();

let heading = document.getElementById("heading");
let subText = document.getElementById("headingSubText");

function headerMessage() {


    heading.textContent = time < 12 ? "Good Morning!" : time < 18 ? "Good Afternoon!" : "Good Evening!";
    subText.textContent = time < 12 ? `Today is ${now.getMonth() + 1}/${now.getDate()}` : time < 18 ? "Here's what you need to do today:" : "Have a lovely rest of your night";
    console.log(time < 12 ? "It is morning" : time < 18 ? "It is the afternoon" : "It is night");
}

function addTask() {
    let task = document.getElementById("taskInput").value.trim();
    if (!task) return;

    createTaskElement(task);
    saveTask(task);
    document.getElementById("taskInput").value = "";

}

function createTaskElement(task) {
    let taskItem = document.createElement("li");
    taskItem.className = "listedItem";
    taskItem.textContent = task;

    taskItem.addEventListener("click", function () {
        listedTaskContainer.removeChild(taskItem);
        removeTask(task);
        
    });

    deleteBtn.addEventListener("click", function() {
        localStorage.removeItem("tasks"); // Remove all tasks by clearing the "tasks" item from localStorage
        listedTaskContainer.removeChild(taskItem);
        removeTask(task);
    });


    listedTaskContainer.appendChild(taskItem);
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => createTaskElement(task));
}

function removeTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function switchTheme() {
    const body = document.getElementById("body");

    if ( time > 18) {
     {
        body.classList.add("darkMode");
        console.log("dark mode enabled");
        console.log("line 1");
    }} else if(heading.Text="Good Morning!" || heading.Text=="Good Afternoon!") {
        body.classList.remove("darkMode");
        console.log("light mode enabled");
        console.log("line 2");
    } else {
        console.log("error");
        }
}

document.getElementById("addBtn").addEventListener("click", addTask); //adds tasks

window.onload = function() {
    loadTasks();
    headerMessage();
    switchTheme();
};

