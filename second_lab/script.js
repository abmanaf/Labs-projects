let todos = [];
let editingId = null;

function addOrEditTodo(event) {
  event.preventDefault();
  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();
  const dueDate = document.getElementById("dueDate").value;
/*
  if (!title || !dueDate) {
    alert("Please fill out both the title and due date fields.");
    return;
  }
    */

  if (editingId !== null) {
    const todo = todos.find((todo) => todo.id === editingId);
    todo.title = title;
    todo.description = description;
    todo.dueDate = new Date(dueDate);
    editingId = null;
  } else {
    const todo = {
      id: Date.now(),
      title,
      description,
      dueDate: new Date(dueDate),
      completed: false,
    };
    todos.push(todo);
  }

  renderTodos();
  clearForm();
}

function editTodo(id) {
  const todo = todos.find((todo) => todo.id === id);
  if (todo.completed) {
    alert("This task is marked as complete and cannot be edited.");
    return;
  }

  document.getElementById("title").value = todo.title;
  document.getElementById("description").value = todo.description;
  document.getElementById("dueDate").value = todo.dueDate
    .toISOString()
    .slice(0, -1);
  editingId = id;
  renderTodos();
}

function renderTodos() {
  const todoList = document.getElementById("todoList");
  const sortButton = document.querySelector(".sort-button");
  todoList.innerHTML = "";

  if (todos.length === 0) {
    todoList.innerHTML = "<p>No List available</p>";
    sortButton.style.display = "none";
  } else {
    sortButton.style.display = "block";
    todos.forEach((todo) => {
      const todoItem = document.createElement("div");
      todoItem.className = "todo-item";
      if (todo.completed) todoItem.classList.add("completed");

      todoItem.innerHTML = `
          <div class='items-in-todo'>
            <div>
              <div class='title_actions'>
                <strong style='font-family: "Lucida Console", "Courier New", monospace; font-size: 20px;'>${
                  todo.title
                }</strong> 
                <div>
                  <button style='border: none;cursor: pointer; font-size: 20px; color: #007bff' onclick="editTodo(${
                    todo.id
                  })" ${todo.completed ? "disabled" : ""}> 
                    <i class="fa-solid fa-edit" aria-hidden="true"></i>
                  </button>
                  <button style='border: none;cursor: pointer; font-size: 20px; color: red' onclick="deleteTodo(${
                    todo.id
                  })"><i class="fa-solid fa-trash" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
              <p style='margin-top: 20px;margin-bottom: 10px;'>${
                todo.description
              }</p>
            </div> 
            <div class='action-duedate'>
              <small style='font-size: 10px'>${todo.dueDate.toLocaleString()}</small>
              <div class='action-bottom'>
                <button style='color: white; border: none' onclick="toggleComplete(${
                  todo.id
                })">${
        todo.completed ? "Unmark as complete" : "Mark as Complete"
      }</button>
              </div>
            </div>
          </div>
        `;
      todoList.appendChild(todoItem);
    });
  }

  document.getElementById("submitButton").textContent = editingId
    ? "Save Changes"
    : "Add To-Do List";
}

function clearForm() {
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("dueDate").value = "";
  editingId = null;
}

function deleteTodo(id) {
  const findDelete = todos.find((d) => d.id !== id);
  const confirmDelete = confirm`Are you sure you want to delete this from the list`;
  if (confirmDelete) {
    todos = todos.filter((todo) => todo.id !== id);
    renderTodos();
  }
}

function sortTodos() {
  todos.sort((a, b) => a.dueDate - b.dueDate);
  renderTodos();
}

function toggleComplete(id) {
  const todo = todos.find((todo) => todo.id === id);
  todo.completed = !todo.completed;
  renderTodos();
}
