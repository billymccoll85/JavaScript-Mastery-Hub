// Get the input element and the button
const input = document.querySelector('#todo-input');
const addButton = document.querySelector('#add-button');

// Get the list element
const list = document.querySelector('#todo-list');

// Function to add a new item to the list
function addItem() {
    // Get the value from the input
    const newItemText = input.value;

    // Create a new list item element
    const newItem = document.createElement('li');
    newItem.textContent = newItemText;

    // Append the new item to the list
    list.appendChild(newItem);

    // Clear the input
    input.value = '';
}

// Event listener for the add button
addButton.addEventListener('click', addItem);



// Code Challenge: Add a feature to delete items from the list
// Get the delete button
const deleteButton = document.querySelector('#delete-button');

// Function to delete the last item from the list
function deleteItem() {
    // Get the last item in the list
    const lastItem = list.lastElementChild;

    // Remove the last item from the list
    list.removeChild(lastItem);
}

// Event listener for the delete button
deleteButton.addEventListener('click', deleteItem);
