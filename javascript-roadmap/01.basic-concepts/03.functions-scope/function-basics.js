
// Define a function
function greet() {
    console.log('Hello World');
}

// Invoke, execute or call a function
greet();

// Define a function with parameters
function sum(num1, num2) {
    console.log(num1 + num2);
}

// Invoke function with arguments
sum(5, 10);

// Parameters vs. Arguments
// Parameters are the names of the variables that are used to pass data into a function.
// Arguments are the values that are passed into the function

// Returning a value
function difference(num1, num2) {
    return num1 - num2;

    console.log('After the return');
}

// Assign the returned value to a variable
const result = difference(10, 2);

console.log(result, difference(20, 5));
  