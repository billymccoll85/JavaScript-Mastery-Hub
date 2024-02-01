// Ways to declare a variable
// `var`, `let`, & `const`

let fullName = 'Jane Smith';
const jobTitle = 'Software Engineer';
let yearsOfExperience = 2;

console.log(yearsOfExperience);

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// fullName = camelCase
// full_name = underscore
// FullName = PascalCase
// fullname = lowercase

// We can re-assign `let` variables. If you change `yearsOfExperience` to use `const`, you will get an error
yearsOfExperience = 3;
console.log(yearsOfExperience);

// With let, we can declare a value without assigning a value
let skillLevel;
skillLevel = 'Intermediate';
console.log(skillLevel);

if (true) {
  skillLevel = 'Advanced';
}

console.log(skillLevel);

const projectCount = 5;

// We can not re-assign a const variable
// projectCount = 6; // Will result in an error

// We can still manipulate arrays and objects using const
const numbers = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers);

const developer = {
  name: 'Jane',
};
developer.name = 'John';
developer.email = 'john@gmail.com';
console.log(developer);

// Declare multiple values at once
let projectA, projectB, projectC;

const projectD = 'Project D',
  projectE = 'Project E',
  projectF = 'Project F';

console.log(projectD);
console.log(projectA);
