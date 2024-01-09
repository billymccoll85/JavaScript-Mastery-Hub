// Function Declaration
function greet(name) {
    console.log(`Hello, ${name}!`);
}

// Function Expression
const sayHello = function(name) {
    console.log(`Hello, ${name}!`);
};

// Use case for Function Declaration:
// Function declarations are hoisted, meaning they can be called before they are defined.
// This allows you to define functions anywhere in your code and call them anywhere else.
greet("John"); // Output: Hello, John!

// Use case for Function Expression:
// Function expressions are useful when you want to assign a function to a variable or pass it as an argument to another function.
// They are not hoisted, so they must be defined before they are called.
sayHello("Alice"); // Output: Hello, Alice!
