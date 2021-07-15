// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//event listener
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click',deleteCheck);



//functions

function addTodo(event) {
    event.preventDefault();
    //todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // create list
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
// check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
// check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
// append to do list
todoList.appendChild(todoDiv);

// clear todo input valuw
todoInput.value="";
}

function deleteCheck(e) {
    const item= e.target;
    // delete button
    if (item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.remove();5
    }
    // check 
    if(item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    }
}
