// Declare a variable
let x;

// Array Literal
const numbers = [100, 200, 300, 400, 500];
const mixed = [100, 'World', true, undefined];

// Array Constructor
const fruits = new Array('banana', 'apple', 'orange');

// Get value by index
x = numbers[1]; // Assign the value at index 1 of the numbers array to x

x = numbers[1] + numbers[3]; // Assign the sum of values at index 1 and 3 of the numbers array to x

x = `My favorite fruit is a ${fruits[0]}`; // Assign a string with the first fruit from the fruits array to x

x = numbers.length; // Assign the length of the numbers array to x

fruits[0] = 'kiwi'; // Update the value at index 0 of the fruits array to 'kiwi'

// fruits.length = 2; // Uncomment this line to truncate the fruits array to a length of 2

fruits[3] = 'strawberry'; // Add 'strawberry' at index 3 of the fruits array

// Using the length as the index will always add to the end
fruits[fruits.length] = 'blueberry'; // Add 'blueberry' at the end of the fruits array
fruits[fruits.length] = 'peach'; // Add 'peach' at the end of the fruits array

x = fruits; // Assign the fruits array to x

console.log(x); // Output the value of x

const names = ['John', 'Jane', 'Mike', 'Emily'];
console.log(names); // Output: ['John', 'Jane', 'Mike', 'Emily']
