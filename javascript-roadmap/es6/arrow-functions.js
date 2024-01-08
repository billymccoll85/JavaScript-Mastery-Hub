const numbers = [1, 2, 3, 4, 5];

// 1. Array mapping
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// 2. Array filtering
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// 3. Array reducing
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

// 4. Object property shorthand
const name = "John";
const age = 30;
const person = { name, age };
console.log(person); // { name: 'John', age: 30 }

// 5. Implicit return
const multiply = (a, b) => a * b;
console.log(multiply(2, 3)); // 6

// 6. Lexical this
function Counter() {
    this.count = 0;
    setInterval(() => {
        this.count++;
        console.log(this.count);
    }, 1000);
}

// 7. Callback functions
const fetchData = (callback) => {
    // Fetch data from API
    const data = { name: "John", age: 30 };
    callback(data);
};

fetchData((data) => {
    console.log(data); // { name: 'John', age: 30 }
});

// 8. Promises
const fetchDataPromise = () => {
    return new Promise((resolve, reject) => {
        // Fetch data from API
        const data = { name: "John", age: 30 };
        resolve(data);
    });
};

fetchDataPromise().then((data) => {
    console.log(data); // { name: 'John', age: 30 }
});

// 9. Event listeners
document.addEventListener("click", () => {
    console.log("Clicked!");
});

// 10. Higher-order functions
const higherOrderFunction = (callback) => {
    // Do something
    callback();
};

higherOrderFunction(() => {
    console.log("Callback function called");
});
