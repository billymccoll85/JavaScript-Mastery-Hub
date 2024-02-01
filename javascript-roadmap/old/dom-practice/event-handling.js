// Get the button element
const button = document.querySelector('#myButton');

// Add a click event listener
button.addEventListener('click', function() {
    // Perform some action when the button is clicked
    console.log('Button clicked!');
});
// Add a mouseover event listener
button.addEventListener('mouseover', function() {
    // Change the button's background color when mouseover
    button.style.backgroundColor = 'red';
});

// Add a mouseout event listener
button.addEventListener('mouseout', function() {
    // Change the button's background color back to its original color when mouseout
    button.style.backgroundColor = 'blue';
});

// Add a keydown event listener
document.addEventListener('keydown', function(event) {
    // Log the key code when a key is pressed
    console.log('Key pressed:', event.key);
});

// Add a submit event listener
const form = document.querySelector('#myForm');
form.addEventListener('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault();
    // Perform form validation and submission logic
    console.log('Form submitted!');
});



// Code Challenges:
// Challenge 1: Add a double-click event listener to the button
button.addEventListener('dblclick', function() {
    // Perform some action when the button is double-clicked
    console.log('Button double-clicked!');
});

// Challenge 2: Add a focus event listener to the input field
const input = document.querySelector('#myInput');
input.addEventListener('focus', function() {
    // Perform some action when the input field is focused
    console.log('Input field focused!');
});

// Challenge 3: Add a change event listener to the select element
const select = document.querySelector('#mySelect');
select.addEventListener('change', function() {
    // Perform some action when the selected option is changed
    console.log('Selected option changed!');
});
