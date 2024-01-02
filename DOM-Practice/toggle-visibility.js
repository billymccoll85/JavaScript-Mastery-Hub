// Get the element you want to toggle
const element = document.getElementById('elementId');

// Function to toggle the visibility
function toggleVisibility() {
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

// Call the toggleVisibility function to toggle the visibility of the element
toggleVisibility();
