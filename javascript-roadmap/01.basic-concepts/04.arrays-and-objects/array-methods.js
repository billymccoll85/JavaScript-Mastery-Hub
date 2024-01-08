// Here is a list of some commonly used JavaScript array methods:

/*
    concat(): Combines two or more arrays and returns a new array.
    join(): Joins all elements of an array into a string.
    pop(): Removes the last element from an array and returns that element.
    push(): Adds one or more elements to the end of an array and returns the new length of the array.
    shift(): Removes the first element from an array and returns that element.
    unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
    slice(): Returns a shallow copy of a portion of an array into a new array.
    splice(): Changes the contents of an array by removing, replacing, or adding elements.
    forEach(): Executes a provided function once for each array element.
    map(): Creates a new array with the results of calling a provided function on every element in the array.
    filter(): Creates a new array with all elements that pass the test implemented by the provided function.
    reduce(): Applies a function against an accumulator and each element in the array to reduce it to a single value.
    find(): Returns the first element in the array that satisfies the provided testing function.
    findIndex(): Returns the index of the first element in the array that satisfies the provided testing function.
    sort(): Sorts the elements of an array in place and returns the sorted array.
    reverse(): Reverses the order of the elements in an array in place.
    includes(): Determines whether an array includes a certain value.
    indexOf(): Returns the first index at which a given element can be found in the array.
    lastIndexOf(): Returns the last index at which a given element can be found in the array.
    every(): Tests whether all elements in the array pass the provided function.
    some(): Tests whether at least one element in the array passes the provided function.
    isArray(): Determines whether the passed value is an array.
*/

// Please note that this is not an exhaustive list, but it covers many commonly used array methods in JavaScript.
// Initial array
const fruits = ['apple', 'banana', 'cherry', 'date'];

// concat(): Combines two or more arrays and returns a new array.
const moreFruits = ['grape', 'kiwi'];
const combinedFruits = fruits.concat(moreFruits);

// join(): Joins all elements of an array into a string.
const fruitString = fruits.join(', ');

// pop(): Removes the last element from an array and returns that element.
const lastFruit = fruits.pop();

// push(): Adds one or more elements to the end of an array and returns the new length of the array.
fruits.push('fig', 'grape');

// shift(): Removes the first element from an array and returns that element.
const firstFruit = fruits.shift();

// unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
fruits.unshift('apricot', 'blueberry');

// slice(): Returns a shallow copy of a portion of an array into a new array.
const slicedFruits = fruits.slice(1, 4);

// splice(): Changes the contents of an array by removing, replacing, or adding elements.
const removedFruits = fruits.splice(1, 2, 'orange', 'pear');

// forEach(): Executes a provided function once for each array element.
fruits.forEach(fruit => console.log(fruit));

// map(): Creates a new array with the results of calling a provided function on every element in the array.
const upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());

// filter(): Creates a new array with all elements that pass the test implemented by the provided function.
const filteredFruits = fruits.filter(fruit => fruit.length > 5);

// reduce(): Applies a function against an accumulator and each element in the array to reduce it to a single value.
const totalLength = fruits.reduce((accumulator, fruit) => accumulator + fruit.length, 0);

// find(): Returns the first element in the array that satisfies the provided testing function.
const foundFruit = fruits.find(fruit => fruit.startsWith('a'));

// findIndex(): Returns the index of the first element in the array that satisfies the provided testing function.
const indexOfFoundFruit = fruits.findIndex(fruit => fruit.startsWith('o'));

// sort(): Sorts the elements of an array in place and returns the sorted array.
fruits.sort();

// reverse(): Reverses the order of the elements in an array in place.
fruits.reverse();

// includes(): Determines whether an array includes a certain value.
const includesPear = fruits.includes('pear');

// indexOf(): Returns the first index at which a given element can be found in the array.
const indexOfCherry = fruits.indexOf('cherry');

// lastIndexOf(): Returns the last index at which a given element can be found in the array.
const lastIndexOfBanana = fruits.lastIndexOf('banana');

// every(): Tests whether all elements in the array pass the provided function.
const allFruitsHaveFiveLetters = fruits.every(fruit => fruit.length === 5);

// some(): Tests whether at least one element in the array passes the provided function.
const someFruitsHaveSixLetters = fruits.some(fruit => fruit.length === 6);

// isArray(): Determines whether the passed value is an array.
const isArrayCheck = Array.isArray(fruits);

