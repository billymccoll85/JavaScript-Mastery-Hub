// Regular Function Declaration
// A regular function declaration is defined using the "function" keyword followed by a name and a parameter list. It can be called using its name followed by parentheses.
function add(a, b) {
    // Adds two numbers and returns the result
    return a + b;
}

console.log(add(2, 3)); // Output: 5

// Function Expression
// A function expression is defined by assigning a function to a variable. It can be called using the variable name followed by parentheses.
const subtract = function(a, b) {
    // Subtracts two numbers and returns the result
    return a - b;
};

const result = subtract(5, 2);
console.log(result); // Output: 3

// Arrow Function
// An arrow function is a concise way to define a function using the "=>" syntax. It automatically binds the "this" value and does not have its own "this" value.
const multiply = (a, b) => a * b;

console.log(multiply(4, 5)); // Output: 20

// IIFE (Immediately Invoked Function Expression)
// An IIFE is a function that is immediately invoked after it is defined. It is commonly used to create a new scope and avoid polluting the global namespace.
(function() {
    console.log("IIFE: This function is immediately invoked.");
})();

// Generator Function
// A generator function is a special type of function that can be paused and resumed. It is defined using the "function*" syntax and contains one or more "yield" statements.
function* countToTen() {
    for (let i = 1; i <= 10; i++) {
        yield i;
    }
}

for (const num of countToTen()) {
    console.log(num); // Output: 1, 2, 3, ..., 10
}

// Async Function
// An async function is a function that can pause and resume execution using the "await" keyword. It returns a promise that resolves to the value returned by the function.
async function fetchData() {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    return data;
}

fetchData().then(data => {
    console.log(data); // Output: fetched data from API
});

// Higher-Order Function
// A higher-order function is a function that takes one or more functions as arguments or returns a function as its result. It can be used to create reusable and composable code.
function repeatAction(action, times) {
    for (let i = 0; i < times; i++) {
        action();
    }
}

repeatAction(() => {
    console.log("Hello, world!");
}, 3); // Output: Hello, world! Hello, world! Hello, world!
