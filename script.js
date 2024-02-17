
const taskInput = document.getElementById("taskInput");
const  addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");



const tasks = JSON.parse(localStorage.getItem('tasks')) || [];


// New function to display tasks
function displayTasks() {
    tasks.forEach(task => {
        addTaskToList(task);
    });
}
 
// Call the function when the page loads
displayTasks();
 




let value = localStorage.getItem("tasks");
console.log(typeof value);


addTaskBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText !== ""){
        addTaskToList(taskText);
        tasks.push(taskText);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        taskInput.value = "";
    }
});

function addTaskToList(taskText) {
    const taskItem = document.createElement("li");
    taskItem.classList.add("taskItem");
    taskItem.textContent = taskText;


    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';   
    deleteBtn.addEventListener("click", function() {
        const index = tasks.indexOf(taskText);
        if (index !== -1) {
            tasks.splice(index, 1);
            localStorage.setItem("tasks",JSON.stringify(tasks))
            taskItem.remove( );
            }
        });



        taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    }

