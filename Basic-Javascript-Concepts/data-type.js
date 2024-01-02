// String data type
const name = "John Doe"; // Represents a person's name

// Number data type
const age = 25; // Represents a person's age

// Boolean data type
const isStudent = true; // Represents whether a person is a student or not

// Array data type
const fruits = ["apple", "banana", "orange"]; // Represents a list of fruits

// Object data type
const person = {
    name: "John Doe",
    age: 25,
    isStudent: true,
}; // Represents a person with properties like name, age, and isStudent

// Null data type
const nullValue = null; // Represents the absence of any object value

// Undefined data type
let undefinedValue; // Represents a variable that has been declared but not assigned a value

// Symbol data type
const id = Symbol("id"); // Represents a unique identifier

// Function data type
function greet(name) {
    console.log(`Hello, ${name}!`);
} // Represents a reusable block of code that performs a specific task

// Date data type
const currentDate = new Date(); // Represents the current date and time

// Regular Expression data type
const regex = /[a-z]+/; // Represents a pattern used to match character combinations in strings

// Map data type
const userMap = new Map(); // Represents a collection of key-value pairs

// Set data type
const uniqueNumbers = new Set([1, 2, 3, 4, 5]); // Represents a collection of unique values

// BigInt data type
const bigNumber = BigInt(9007199254740991); // Represents integers with arbitrary precision

// Symbol data type
const symbol = Symbol("description"); // Represents a unique identifier

// ArrayBuffer data type
const buffer = new ArrayBuffer(8); // Represents a fixed-length raw binary data buffer

// DataView data type
const view = new DataView(buffer); // Represents a low-level interface for reading and writing multiple number types

// TypedArray data type
const typedArray = new Int32Array(buffer); // Represents a view of a fixed-length binary data buffer

// Promise data type
const fetchData = new Promise((resolve, reject) => {
    // Represents an asynchronous operation that may complete in the future
    // Resolve or reject the promise based on the result of the operation
});

// Async/Await data type
async function getData() {
    // Represents a way to write asynchronous code that looks like synchronous code
    try {
        const response = await fetchData();
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}


// Code Challenge: Print the data types of each variable

console.log(typeof name); // Output: string
console.log(typeof age); // Output: number
console.log(typeof isStudent); // Output: boolean
console.log(typeof fruits); // Output: object
console.log(typeof person); // Output: object
console.log(typeof nullValue); // Output: object
console.log(typeof undefinedValue); // Output: undefined
console.log(typeof id); // Output: symbol
console.log(typeof greet); // Output: function
console.log(typeof currentDate); // Output: object
console.log(typeof regex); // Output: object
console.log(typeof userMap); // Output: object
console.log(typeof uniqueNumbers); // Output: object
console.log(typeof bigNumber); // Output: bigint
console.log(typeof symbol); // Output: symbol
console.log(typeof buffer); // Output: object
console.log(typeof view); // Output: object
console.log(typeof typedArray); // Output: object
console.log(typeof fetchData); // Output: function
console.log(typeof getData); // Output: function
