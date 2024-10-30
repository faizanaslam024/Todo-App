let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Initialize the app
window.onload = () => {
  displayTasks();
};

// Display tasks
function displayTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    taskList.innerHTML += `
            <li>
                <span contenteditable="true" onblur="editTask(${index}, this.innerText)">${task}</span>
                <button class="edit-btn" onclick="editTask(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
            </li>
        `;
  });
}

// Add a task
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText) {
    tasks.push(taskText);
    taskInput.value = "";
    saveTasks();
    displayTasks();
  }
}

// Edit a task
function editTask(index, updatedText) {
  if (updatedText) {
    tasks[index] = updatedText.trim();
    saveTasks();
  }
}

// Delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  displayTasks();
}

// Save tasks to local storage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
