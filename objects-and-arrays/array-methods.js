// Example using map method
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Example using filter method
const words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const filteredWords = words.filter(word => word.length > 5);
console.log(filteredWords); // Output: ['banana', 'cherry', 'elderberry']

// Example using reduce method
const values = [10, 20, 30, 40, 50];
const sum = values.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 150

// Example using forEach method
const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach(fruit => console.log(fruit)); // Output: 'apple', 'banana', 'cherry'

// Example using find method
const ages = [25, 30, 35, 40, 45];
const foundAge = ages.find(age => age > 35);
console.log(foundAge); // Output: 40

// Example using some method
const numbers = [1, 2, 3, 4, 5];
const hasEvenNumber = numbers.some(num => num % 2 === 0);
console.log(hasEvenNumber); // Output: true

// Example using every method
const grades = [80, 85, 90, 95, 100];
const allPassing = grades.every(grade => grade >= 70);
console.log(allPassing); // Output: true

// Example using includes method
const fruits = ['apple', 'banana', 'cherry'];
const hasBanana = fruits.includes('banana');
console.log(hasBanana); // Output: true

// Example using sort method
const names = ['John', 'Alice', 'Bob', 'David'];
names.sort();
console.log(names); // Output: ['Alice', 'Bob', 'David', 'John']

// Example using reverse method
const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // Output: [5, 4, 3, 2, 1]

// Array shift()
console.log(numbers.shift()); // Output: 5
console.log(numbers); // Output: [4, 3, 2, 1]

// Array unshift()
numbers.unshift(6);
console.log(numbers); // Output: [6, 4, 3, 2, 1]

// Array delete()
delete numbers[2];
console.log(numbers); // Output: [6, 4, empty, 2, 1]

// Array concat()
const moreNumbers = [7, 8, 9];
const combinedNumbers = numbers.concat(moreNumbers);
console.log(combinedNumbers); // Output: [6, 4, empty, 2, 1, 7, 8, 9]

// Array copyWithin()
numbers.copyWithin(1, 0, 2);
console.log(numbers); // Output: [6, 6, empty, 2, 1]

// Array flat()
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flattenedArray = nestedArray.flat();
console.log(flattenedArray); // Output: [1, 2, 3, 4, [5, 6]]

// Array splice()
const fruits = ['apple', 'banana', 'cherry', 'date'];
fruits.splice(2, 1, 'grape');
console.log(fruits); // Output: ['apple', 'banana', 'grape', 'date']

// Array toSpliced()
const splicedFruits = fruits.splice(1, 2);
console.log(splicedFruits); // Output: ['banana', 'grape']
console.log(fruits); // Output: ['apple', 'date']

// Array slice()
const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Output: ['date']
const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // Output: [5, 4, 3, 2, 1]

// Array length
console.log(numbers.length); // Output: 5

// Array toString()
console.log(numbers.toString()); // Output: "1,2,3,4,5"

// Array at()
console.log(numbers[2]); // Output: 3

// Array join()
console.log(numbers.join('-')); // Output: "1-2-3-4-5"

// Array pop()
console.log(numbers.pop()); // Output: 5

// Array push()
numbers.push(6);
console.log(numbers); // Output: [1, 2, 3, 4, 6]
