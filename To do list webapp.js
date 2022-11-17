const taskInput=document.querySelector(".task-input input"),
taskButton=document.querySelector(".task-input button"),
filters=document.querySelectorAll(".filters span"),
clearAll=document.querySelector(".clear-btn"),
taskBox=document.querySelector(".task-box");

let editId, isEditTask=false;
let todos=JSON.parse(localStorage.getItem("todo-list"));

filters.forEach(btn =>{
    btn.addEventListener("click",()=>{
        document.querySelector("span.active").classList.remove("active");
        btn.classList.add("active");
        showToDo(btn.id);
    });
});

function showToDo(filter){
    let liTag=" ";
    if(todos){
        todos.forEach((todo,id)=>{
            let completed=todo.status=="completed"?"checked":"";
            if(filter==todo.status || filter=="all"){
                liTag+=`<li class="task">
                            <label for="${id}">
                                <input onclick="updateStatus(this)" type="checkbox" id="${id}" ${completed}>
                                <p class="${completed}">${todo.name}</p>
                            </label>
                            <div class="settings">
                                <i onclick="editTask(${id},'${todo.name}')" class="uil uil-pen"></i>&nbsp;&nbsp;
                                <i onclick="deleteTask(${id},'${filter}')" class="uil uil-trash"></i>
                            </div>
                        </li>`;
            }
        });
    }
    taskBox.innerHTML=liTag || `<span>No tasks found</span>`;
    let checkTask=taskBox.querySelectorAll(".task");
    !checkTask.length?clearAll.classList.remove("active"):clearAll.classList.add("active");
    taskBox.offsetHeight>=300?taskBox.classList.add("overflow"):taskBox.classList.remove("overflow");
}
showToDo("all");

function editTask(taskId, textName){
    editId=taskId;
    isEditTask=true;
    taskInput.value=textName;
    taskInput.focus();
    taskInput.classList.add("active");
}

function deleteTask(deleteId,filter){
    isEditTask=false;
    todos.splice(deleteId,1);
    localStorage.setItem("todo-list",JSON.stringify(todos));
    showToDo(filter);
}

function updateStatus(selectedTask){
    let taskName=selectedTask.parentElement.lastElementChild;
    if(selectedTask.checked){
        taskName.classList.add("checked");
        todos[selectedTask.id].status="completed";
    }else{
        taskName.classList.add("checked");
        todos[selectedTask.id].status="pending";
    }
    localStorage.setItem("todo-list",JSON.stringify(todos));
}

clearAll.addEventListener("click",()=>{
    isEditTask=false;
    todos.splice(0,todos.length);
    localStorage.setItem("todo-list",JSON.stringify(todos));
    showToDo();
});

taskButton.addEventListener("click",()=>{
    let userTask=taskInput.value.trim();
    if(userTask){
        if(!isEditTask){
            todos=!todos?[]:todos;
            let taskInfo={name:userTask,status:"pending"};
            todos.push(taskInfo);
        }else{
            isEditTask=false;
            todos[editId].name=userTask;
        }
        taskInput.value="";
        localStorage.setItem("todo-list",JSON.stringify(todos));
        showToDo(document.querySelector("span.active").id);
    }
});