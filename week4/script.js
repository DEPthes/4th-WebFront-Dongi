const input = document.getElementById('input-todo');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const countItem = document.getElementById('count-remaining');


const todoLists = [];


function handleAddBtnClick(e){
    e.preventDefault();

    todoLists.push(input.value);
    todoList.innerHTML = "";

    todoLists.map((item,index)=> {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "❌";

        const text = document.createTextNode(item);
        li.appendChild(text);

        li.appendChild(checkbox);
        li.appendChild(deleteBtn);

        todoList.appendChild(li);
    })
    
    input.value="";
}

addBtn.addEventListener("click",handleAddBtnClick);