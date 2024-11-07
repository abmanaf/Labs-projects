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
              <div class='title_actions'>
                <strong style='font-family: "Lucida Console", "Courier New", monospace; font-size: 20px;'>${
                  todo.title
                }</strong> 
                <div>
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
              <p style='margin-top: 20px;margin-bottom: 10px;'>${
                todo.description
              }</p>
              </div> 
            <div class='action-duedate'>
              <small style='font-size: 10px'>${todo.dueDate.toLocaleString()}</small>
              <div class='action-bottom'>
                <button onclick="toggleComplete(${todo.id})">${
        todo.completed ? "Unmark as complete" : "Mark as Complete"
      }</button>
                
              </div>
            </div>
          </div>
        `;
      todoList.appendChild(todoItem);
    });
  }
}

function sortTodos() {
  const selectElement = document.getElementById("sort-select");
  const selectedValue = selectElement.value;

  if (selectedValue === "2") {
    todos.sort((a, b) => a.dueDate - b.dueDate);
    renderTodos();
    console.log("Sorting by Due Date...");
  } else {
    console.log("No sorting selected.");
  }
}

function clearForm() {
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("dueDate").value = "";
}

function deleteTodo(id, silent) {
  const findToDelete = todos.find((t) => t.id === id);
  const confirmDelete =
    !silent &&
    confirm(
      `Are you sure you want to delete ${findToDelete.title} from the list`
    );
  //alert(confirmDelete+' '+silent)
  if (silent || confirmDelete) {
    todos = todos.filter((todo) => todo.id !== id);
    renderTodos();
  }

  // todos = todos.filter((todo) => todo.id !== id);
  // renderTodos();
}

function editTodo(id) {
  const todo = todos.find((todo) => todo.id === id);
  document.getElementById("title").value = todo.title;
  document.getElementById("description").value = todo.description;
  document.getElementById("dueDate").value = todo.dueDate
    .toISOString()
    .slice(0, -1);
  deleteTodo(id, true);
}

function toggleComplete(id) {
  const todo = todos.find((todo) => todo.id === id);
  todo.completed = !todo.completed;
  renderTodos();
}
