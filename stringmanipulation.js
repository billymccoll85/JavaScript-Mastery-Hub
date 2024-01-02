// Concatenating strings using template literals
const name = 'John';
const age = 30;
const message = `My name is ${name} and I am ${age} years old.`;
console.log(message); // Output: My name is John and I am 30 years old.

// Concatenating strings using the plus operator
const firstName = 'John';
const lastName = 'Doe';
const fullName = firstName + ' ' + lastName;
console.log(fullName); // Output: John Doe

// Concatenating strings using the concat() method
const greeting = 'Hello';
const nameGreeting = greeting.concat(', ', firstName, ' ', lastName);
console.log(nameGreeting); // Output: Hello, John Doe

// Accessing individual characters in a string
const str = 'Hello, World!';
console.log(str[0]); // Output: H
console.log(str.charAt(7)); // Output: W

// Converting a string to uppercase or lowercase
const uppercaseStr = str.toUpperCase();
console.log(uppercaseStr); // Output: HELLO, WORLD!

const lowercaseStr = str.toLowerCase();
console.log(lowercaseStr); // Output: hello, world!

// Checking if a string starts or ends with a specific substring
console.log(str.startsWith('Hello')); // Output: true
console.log(str.endsWith('World!')); // Output: true

// Replacing substrings in a string
const replacedStr = str.replace('World', 'Universe');
console.log(replacedStr); // Output: Hello, Universe!

// Getting the length of a string
console.log(str.length); // Output: 13
