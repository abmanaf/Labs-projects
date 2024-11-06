let todos = [];

function addTodo(event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const dueDate = document.getElementById("dueDate").value;

  const todo = {
    id: Date.now(),
    title,
    description,
    dueDate: new Date(dueDate),
    completed: false,
  };

  todos.push(todo);
  renderTodos();
  clearForm();
}

function renderTodos() {
  const todoList = document.getElementById("todoList");
  const sortButton = document.querySelector(".sort-button");
  todoList.innerHTML = "";

  if (todos.length === 0) {
    todoList.innerHTML = "<p>No tasks available</p>";
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
              <strong>${todo.title}</strong> 
              <p>${todo.description}</p>
            </div> 
            <div class='action-duedate'>
              <small>${todo.dueDate.toLocaleString()}</small>
              <div class='action-bottom'>
                <button onclick="toggleComplete(${todo.id})">${
        todo.completed ? "Unmark" : "Complete"
      }</button>
                <button style='border: none; color: #007bff' onclick="editTodo(${
                  todo.id
                })"> <i class="fa-solid fa-edit" aria-hidden="true"></i>
                </button>
                <button style='border: none; color: red' onclick="deleteTodo(${
                  todo.id
                })"><i class="fa-solid fa-trash" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        `;
      todoList.appendChild(todoItem);
    });
  }
}

function clearForm() {
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("dueDate").value = "";
}

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  renderTodos();
}

function editTodo(id) {
  const todo = todos.find((todo) => todo.id === id);
  document.getElementById("title").value = todo.title;
  document.getElementById("description").value = todo.description;
  document.getElementById("dueDate").value = todo.dueDate
    .toISOString()
    .slice(0, -1);
  deleteTodo(id);
}

function toggleComplete(id) {
  const todo = todos.find((todo) => todo.id === id);
  todo.completed = !todo.completed;
  renderTodos();
}

function sortTodos() {
  todos.sort((a, b) => a.dueDate - b.dueDate);
  renderTodos();
}
