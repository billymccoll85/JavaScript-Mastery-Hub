// Create a new element
const newElement = document.createElement('div');

// Add content to the new element
newElement.textContent = 'This is a new element';

// Add a class to the new element
newElement.classList.add('new-element');

// Append the new element to an existing element in the DOM
const parentElement = document.getElementById('parent');
parentElement.appendChild(newElement);

// Remove the new element from the DOM
parentElement.removeChild(newElement);
