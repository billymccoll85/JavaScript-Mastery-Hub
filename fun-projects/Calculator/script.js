// Get the display element
const display = document.getElementById("display");

/**
 * Function to append the clicked button value to the display.
 * @param {string} value - The value to be appended to the display.
 */
function appendToDisplay(value) {
    display.value += value;
}

/**
 * Function to calculate the result of the expression.
 * If an error occurs during evaluation, display "Error" on the display.
 */
function calculate() {
    try {
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

/**
 * Function to clear the display.
 */
function clearDisplay() {
    display.value = "";
}

// Attach event listeners to number and operator buttons
const buttons = [
    { id: 'btn7', value: '7' }, { id: 'btn8', value: '8' }, { id: 'btn9', value: '9' },
    { id: 'btnDivide', value: '/' }, { id: 'btn4', value: '4' }, { id: 'btn5', value: '5' },
    { id: 'btn6', value: '6' }, { id: 'btnMultiply', value: '*' }, { id: 'btn1', value: '1' },
    { id: 'btn2', value: '2' }, { id: 'btn3', value: '3' }, { id: 'btnSubtract', value: '-' },
    { id: 'btn0', value: '0' }, { id: 'btnDecimal', value: '.' }, { id: 'btnAdd', value: '+' }
];

// Add event listeners to the buttons
buttons.forEach(button => {
    document.getElementById(button.id).addEventListener('click', () => appendToDisplay(button.value));
});

// Attach event listener for equals button
document.getElementById("btnEquals").addEventListener('click', calculate);

// Attach event listener for clear button
document.getElementById("btnClear").addEventListener('click', clearDisplay);
