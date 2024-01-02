// Example 1: Destructuring an array
const numbers = [1, 2, 3, 4, 5];
const [a, b, ...restNumbers] = numbers;

// Example 2: Destructuring an object
const person = { name: 'John', age: 30, city: 'New York' };
const { name: personName, age: personAge } = person;

// Example 3: Destructuring with default values
const { name: defaultName = 'Anonymous', age: defaultAge = 0 } = person;

// Example 4: Destructuring nested objects
const student = { name: 'Alice', age: 20, address: { city: 'London', country: 'UK' } };
const { name: studentName, address: { city: studentCity, country: studentCountry } } = student;

// Example 5: Destructuring function parameters
function printPerson({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}
printPerson(person);

// Example 6: Destructuring with renaming
const { name: personName2, age: personAge2 } = person;

// Example 7: Destructuring with rest operator in objects
const { name: restName, ...restProps } = person;

// Example 8: Destructuring with default values and renaming
const { name: userName = 'Unknown', age: userAge = 0 } = person;

// Example 9: Destructuring with default values and renaming in function parameters
function greetUser({ name = 'Anonymous', age = 0 }) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}

// Example 10: Destructuring in nested arrays
const matrix = [[1, 2], [3, 4]];
const [[a1, b1], [c1, d1]] = matrix;

// Example 11: Destructuring with strings
const [firstChar, ...remainingChars] = 'Hello';

// Example 12: Destructuring with numbers
const [x, y, z] = [1, 2, 3];

// Example 13: Destructuring with booleans
const { isActive, isAdmin } = { isActive: true, isAdmin: false };
