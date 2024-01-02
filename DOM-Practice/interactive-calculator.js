// Function to perform the calculation
function calculate() {
    // Get the input values from the calculator
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;

    let result;

    // Perform the calculation based on the operator
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operator';
    }

    // Display the result
    document.getElementById('result').innerHTML = result;
}

// Attach event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculate);
// Attach event listeners to number buttons
const numberButtons = document.getElementsByClassName('number');
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', function() {
        const currentNumber = document.getElementById('num1').value;
        const clickedNumber = this.innerHTML;
        document.getElementById('num1').value = currentNumber + clickedNumber;
    });
}

// Attach event listeners to operator buttons
const operatorButtons = document.getElementsByClassName('operator');
for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', function() {
        document.getElementById('operator').value = this.innerHTML;
    });
}

// Attach event listener to clear button
document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('operator').value = '';
    document.getElementById('result').innerHTML = '';
});
