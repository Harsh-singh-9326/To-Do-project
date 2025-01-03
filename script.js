console.log("TO DO ARE WORKING");

// Function to load todos from localStorage
function loadtodos() {
const todos = JSON.parse(localStorage.getItem("todos")) || { "todolist": [] };
console.log(todos);
return todos;
}

function showtodo(todotext){
    let value = document.querySelector("#tasklist")
    let todo = document.createElement("li")
    todo.textContent = todotext 
    value.appendChild(todo)


}

// Function to add a todo to localStorage
function addtodotolocalstorage(todotext) {
const todos = loadtodos();
todos.todolist.push(todotext);
localStorage.setItem("todos", JSON.stringify(todos)); // Store updated todos in localStorage
console.log("Updated todos:", todos);
}

// Event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
const todoinput = document.querySelector("#todoinput");
const submitbutton = document.querySelector("#addtodo");

// Add event listener for the submit button
submitbutton.addEventListener("click", () => {
const todotext = todoinput.value.trim();
if (todotext === "") {
alert("Please put some text to add your todo.");
} else {
addtodotolocalstorage(todotext); // Add new todo to localStorage
todoinput.value = "";
showtodo(todotext) 
}
const todos = loadtodos()
todos.todolist.forEach(todo => {
    let value = document.querySelector("#tasklist")

    const newtodoitem = document.createElement("li")

    newtodoitem.textContent = todo

    todolist.appendChild(newtodoitem)


    
});
});
});