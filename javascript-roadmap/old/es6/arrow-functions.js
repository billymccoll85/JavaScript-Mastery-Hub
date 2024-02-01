const numbers = [1, 2, 3, 4, 5];

// Array mapping
const doubledNumbers = numbers.map(num => num * 2);
console.log(`Doubled Numbers: ${doubledNumbers}`);

// Array filtering
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(`Even Numbers: ${evenNumbers}`);

// Array reducing
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(`Sum: ${sum}`);

// Object property shorthand
const name = "John";
const age = 30;
const person = { name, age };
console.log(`Person: ${JSON.stringify(person)}`);

// Implicit return
const multiply = (a, b) => a * b;
console.log(`Multiply: ${multiply(2, 3)}`);

// Lexical this in arrow functions
function Counter() {
    this.count = 0;
    setInterval(() => {
        this.count++;
        console.log(`Count: ${this.count}`);
    }, 1000);
}

// Callback functions
const fetchData = (callback) => {
    // Fetch data from API
    const data = { name: "John", age: 30 };
    callback(data);
};

fetchData(data => console.log(`Fetched Data: ${JSON.stringify(data)}`));

// Promises
const fetchDataPromise = () => {
    return new Promise((resolve, reject) => {
        // Fetch data from API
        const data = { name: "John", age: 30 };
        resolve(data);
    });
};

fetchDataPromise().then(data => console.log(`Data from Promise: ${JSON.stringify(data)}`));

// Event listeners
document.addEventListener("click", () => console.log("Clicked!"));

// Higher-order functions
const higherOrderFunction = (callback) => callback();

higherOrderFunction(() => console.log("Callback function called"));
