// Example using var
// The 'var' keyword declares a variable that is function-scoped.
// It can be redeclared and reassigned.
var name = "John";
var age = 25;
console.log(name); // Output: John
console.log(age); // Output: 25

// Example using let
// The 'let' keyword declares a block-scoped variable.
// It can be reassigned but not redeclared within the same scope.
let city = "New York";
let population = 8500000;
console.log(city); // Output: New York
console.log(population); // Output: 8500000

// Example using const
// The 'const' keyword declares a block-scoped variable that cannot be reassigned.
// It must be assigned a value when declared and cannot be redeclared or reassigned.
const PI = 3.14;
const radius = 5;
console.log(PI); // Output: 3.14
console.log(radius); // Output: 5


// Challenge 1: Variable Swap
// Swap the values of the 'name' and 'age' variables using a temporary variable.
let temp;
// Your code here

console.log(name); // Expected output: 25
console.log(age); // Expected output: John

// Challenge 2: Population Growth
// Increase the population of the city by 10% and update the 'population' variable.
// Your code here

console.log(population); // Expected output: 9350000

// Challenge 3: Circle Area
// Calculate and print the area of a circle with the given radius.
// Formula: area = PI * radius^2
let area;
// Your code here

console.log(area); // Expected output: 78.5
