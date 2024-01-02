// For Loop Example
for (let i = 1; i <= 5; i++) {
    console.log(`For Loop: ${i}`); // Prints numbers from 1 to 5
}

// For...In Loop Example
const person = { firstName: "John", lastName: "Doe" };
for (let key in person) {
    console.log(`For...In Loop: ${key}: ${person[key]}`); // Prints each property name and its value
}

// For...Of Loop Example
const colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(`For...Of Loop: ${color}`); // Prints each color in the array
}

// While Loop Example
let number = 1;
while (number <= 5) {
    console.log(`While Loop: ${number}`); // Prints numbers from 1 to 5
    number++; // Increments 'number' by 1 after each iteration
}

// Do...While Loop Example
let count = 1;
do {
    console.log(`Do...While Loop: ${count}`); // Prints numbers from 1 to 5
    count++; // Increments 'count' by 1 after each iteration
} while (count <= 5);

// For Loop Challenge 1
for (let i = 2; i <= 10; i += 2) {
    console.log(`For Loop Challenge 1: ${i}`); // Prints even numbers from 2 to 10
}
// For Loop Example - Reverse Order
for (let i = 5; i >= 1; i--) {
    console.log(`For Loop: ${i}`); // Prints numbers from 5 to 1
}
