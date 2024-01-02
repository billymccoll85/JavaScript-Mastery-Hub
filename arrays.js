// Creating an empty array
const emptyArray = [];

// Creating an array with initial values
const fruits = ['apple', 'banana', 'orange'];

// Accessing array elements using index
const firstFruit = fruits[0]; // Retrieves the first element 'apple'

// Modifying array elements using index
fruits[1] = 'grape'; // Changes the second element to 'grape'

// Adding elements to the end of an array
fruits.push('kiwi'); // Adds 'kiwi' to the end of the array

// Removing the last element from an array
const lastFruit = fruits.pop(); // Removes and returns 'kiwi'

// Adding elements to the beginning of an array
fruits.unshift('pear'); // Adds 'pear' to the beginning of the array

// Removing the first element from an array
const firstElement = fruits.shift(); // Removes and returns 'pear'

// Finding the index of an element in an array
const index = fruits.indexOf('banana'); // Returns the index of 'banana' (1)

// Checking if an element exists in an array
const hasOrange = fruits.includes('orange'); // Returns true if 'orange' exists in the array

// Removing elements from an array by index
const removedFruit = fruits.splice(1, 1); // Removes 1 element at index 1 ('banana')

// Slicing an array to create a new array
const slicedFruits = fruits.slice(1, 3); // Creates a new array with elements at index 1 and 2 ('grape', 'orange')

// Concatenating arrays
const moreFruits = ['mango', 'pineapple'];
const allFruits = fruits.concat(moreFruits); // Combines the two arrays

// Sorting an array
fruits.sort(); // Sorts the array in alphabetical order

// Reversing the order of elements in an array
fruits.reverse(); // Reverses the order of elements in the array

// Checking the length of an array
const arrayLength = fruits.length; // Returns the number of elements in the array

// Iterating over array elements using a loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // Prints each element of the array
}

// Iterating over array elements using forEach method
fruits.forEach((fruit) => {
    console.log(fruit); // Prints each element of the array
});

// Mapping array elements to a new array
const uppercasedFruits = fruits.map((fruit) => fruit.toUpperCase()); // Creates a new array with uppercased elements

// Filtering array elements based on a condition
const filteredFruits = fruits.filter((fruit) => fruit.length > 5); // Creates a new array with fruits having more than 5 characters

// Reducing array elements to a single value
const totalLength = fruits.reduce((acc, fruit) => acc + fruit.length, 0); // Calculates the total length of all fruits

// Checking if all array elements satisfy a condition
const allFruitsAreLong = fruits.every((fruit) => fruit.length > 5); // Returns true if all fruits have more than 5 characters

// Checking if at least one array element satisfies a condition
const hasLongFruit = fruits.some((fruit) => fruit.length > 5); // Returns true if at least one fruit has more than 5 characters
