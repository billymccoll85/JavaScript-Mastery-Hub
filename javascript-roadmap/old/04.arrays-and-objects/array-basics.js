// Create an array
const fruits = ['apple', 'banana', 'orange'];

// Access elements in the array
console.log(fruits[0]); // Output: 'apple'
console.log(fruits[1]); // Output: 'banana'
console.log(fruits[2]); // Output: 'orange'
// Get the length of the array
console.log(fruits.length); // Output: 3

// Add elements to the end of the array
fruits.push('grape');
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape']

// Remove the last element from the array
fruits.pop();
console.log(fruits); // Output: ['apple', 'banana', 'orange']

// Check if an element exists in the array
console.log(fruits.includes('banana')); // Output: true

// Find the index of an element in the array
console.log(fruits.indexOf('orange')); // Output: 2

const mixedArray = ['apple', 5, true, {name: 'John'}, null];
console.log(mixedArray); // Output: ['apple', 5, true, {name: 'John'}, null]

// Create an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Use map to double each number in the array
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Use reduce to calculate the sum of all numbers in the array
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 15

// Use filter to get only the even numbers from the array
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
