const input = document.getElementById('input-todo');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const countItem = document.getElementById('count-remaining');

let todoLists = [];

function renderTodoList(){
    todoList.innerHTML = "";

        todoLists.forEach((item,index)=> {
            const li = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
    
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = "❌";
            deleteBtn.addEventListener("click", () => handleDeleteBtnClick(index));
    
            const text = document.createElement('span');
            text.className = 'todo-text';
            text.textContent = item;

            li.appendChild(checkbox);
            li.appendChild(text);
            li.appendChild(deleteBtn);
            todoList.appendChild(li);
        });

        countItem.textContent = `${todoLists.length}개 항목 남음`;
}

function handleAddBtnClick(e){
    e.preventDefault();
    const trimmed = input.value.trim();

    if(trimmed){
        todoLists.push(trimmed);
        renderTodoList();
        input.value="";
    }
}

function handleDeleteBtnClick(index){
    todoLists = todoLists.filter((_ , i) =>i !== index);
    renderTodoList();
}

addBtn.addEventListener("click",handleAddBtnClick);