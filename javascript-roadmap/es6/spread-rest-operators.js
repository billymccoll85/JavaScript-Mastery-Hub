// Spread Operator
const numbers = [1, 2, 3, 4, 5];
const sum = (a, b, c, d, e) => a + b + c + d + e;
console.log(sum(...numbers)); // Output: 15

const fruits = ['apple', 'banana', 'orange'];
const newFruits = [...fruits, 'grapefruit'];
console.log(newFruits); // Output: ['apple', 'banana', 'orange', 'grapefruit']

// The spread operator (...) allows us to expand an iterable (e.g., an array) into individual elements.
// In the first example, we use the spread operator to pass the elements of the 'numbers' array as arguments to the 'sum' function.
// In the second example, we use the spread operator to create a new array 'newFruits' by combining the elements of the 'fruits' array with an additional element 'grapefruit'.

// Rest Operator
const multiply = (multiplier, ...numbers) => {
    return numbers.map((number) => multiplier * number);
};
console.log(multiply(2, 1, 2, 3, 4, 5)); // Output: [2, 4, 6, 8, 10]

const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

// The rest operator (...) allows us to represent an indefinite number of arguments as an array.
// In the first example, we use the rest operator to capture multiple arguments passed to the 'multiply' function and store them in the 'numbers' array.
// In the second example, we use the rest operator to assign the first two elements of the array to 'first' and 'second' variables, and the remaining elements to the 'rest' array.
