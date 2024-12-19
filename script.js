
// Todo List
const todoList = []

// Add
function addTodo() {
    const inputElement = document.getElementById("newTodo")
    const todoText = inputElement.value

    if (todoText.trim() !== "") {
        const newTodo = { id: Math.random(), text: todoText, completed: false }
        todoList.push(newTodo)
        console.log(todoList)
        displayTodo(newTodo)
        inputElement.value = ""
    }
}

function displayTodo(todo) {
    const todoListElement = document.getElementById("todoList")

    const li = document.createElement("li")
    li.innerHTML = `
        <input type="checkbox" ${todo.completed ? "checked" : ""} 
        onclick="toggleCompleted(${todo.id})">
        <span class=${todo.completed ? "completed" : ""}>${todo.text}</span>
        <button style="margin-left: auto;" onclick="deleteTodo(${todo.id})">Delete</button>
    `

    todoListElement.appendChild(li)
}

function toggleCompleted(_id) {
    let todoToUpdate = {}

    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id === _id) {
            todoToUpdate = todoList[i]
        }
    }

    if (todoToUpdate) {
        todoToUpdate.completed = !todoToUpdate.completed
        console.log(todoList)
        refreshTodoList()
    }
}

function refreshTodoList() {
    const todoListElement = document.getElementById("todoList")

    todoListElement.innerHTML = ""

    for (let i = 0; i < todoList.length; i++) {
        displayTodo(todoList[i])
    }
}

function deleteTodo(_id) {
    let indexToDelete = -1

    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id === _id) {
            indexToDelete = i
        }
    }

    if (indexToDelete !== -1) {
        todoList.splice(indexToDelete, 1)
        console.log(todoList)
        refreshTodoList()
    }
} 
