// Getting DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
  const taskValue = taskInput.value.trim();
  if (taskValue === '') return;

  // Create a new task object
  const task = {
    text: taskValue,
    id: Date.now(), // Using a timestamp as a unique identifier
  };

  // Add the task to local storage
  addToLocalStorage(task);

  // Clear input
  taskInput.value = '';

  // Display the updated task list
  displayTasks();
}

// Function to add a task to local storage
function addToLocalStorage(task) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to remove a task from local storage
function removeFromLocalStorage(taskId) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.filter(task => task.id !== taskId);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to display tasks from local storage
function displayTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  taskList.innerHTML = '';

  tasks.forEach(task => {
    // Create a new task element
    const taskElement = document.createElement('li');

    // Add task text
    const taskText = document.createElement('span');
    taskText.innerText = task.text;
    taskElement.appendChild(taskText);

    // Add remove button
    const removeBtn = document.createElement('button');
    removeBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    removeBtn.className = 'remove-btn';
    removeBtn.addEventListener('click', function() {
      // Remove from the DOM
      taskList.removeChild(taskElement);

      // Remove from local storage
      removeFromLocalStorage(task.id);
    });
    taskElement.appendChild(removeBtn);

    // Append to list
    taskList.appendChild(taskElement);
  });
}

// Add event listeners
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

// Initial display of tasks from local storage
displayTasks();
