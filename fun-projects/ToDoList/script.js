// Getting DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
  const taskValue = taskInput.value.trim();
  if (taskValue === '') return;

  // Create new task element
  const taskElement = document.createElement('li');

  // Add task text
  const taskText = document.createElement('span');
taskText.innerText = taskValue;
taskElement.appendChild(taskText);

// Add remove button
const removeBtn = document.createElement('button');
removeBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
removeBtn.className = 'remove-btn';
removeBtn.addEventListener('click', function() {
    taskList.removeChild(taskElement);
});
  taskElement.appendChild(removeBtn);

  // Append to list
  taskList.appendChild(taskElement);

  // Clear input
  taskInput.value = '';
}

// Add event listeners
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
