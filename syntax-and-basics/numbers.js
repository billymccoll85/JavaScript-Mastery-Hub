/**
 * Converts a number to a string representation using the toString() method.
 * @param {number} num - The number to be converted.
 * @returns {string} - The string representation of the number.
 */
let x;

const num = 20;

// toString() - returns a string representation of the number
x = num.toString();
// To get the length
x = x.length;

// toFixed() - returns a string representation of the number with a specified number of decimals
x = num.toFixed(2);

// toPrecision() - returns a number with the specified length
x = num.toPrecision(3);

// toExponential() -  convert a number to exponential notation and return its value as a string
x = num.toExponential(2);

// toLocaleString() - returns a string representation of the number, using the current locale
x = num.toLocaleString('en-US');

// valueOf - Get value
x = num.valueOf();

// The Number object itself has some properties and methods

// Largest and smallest possible number
x = Number.MAX_VALUE;
x = Number.MIN_VALUE;

console.log(x);
