const name = 'John';
console.log(`Hello, ${name}!`);

// Use Case 1: Dynamic String Generation
const age = 25;
console.log(`I am ${age} years old.`);

// Use Case 2: Multiline Strings
const message = `This is a multiline string.
It allows us to write multiple lines without using escape characters.`;
console.log(message);

// Use Case 3: Expressions within Strings
const a = 10;
const b = 5;
console.log(`The sum of ${a} and ${b} is ${a + b}.`);

// Use Case 4: HTML Templating
const person = {
    name: 'Alice',
    age: 30,
};
const html = `
    <div>
        <h2>${person.name}</h2>
        <p>Age: ${person.age}</p>
    </div>
`;
console.log(html);

// Use Case 5: Conditional Rendering
const isLoggedIn = true;
const greeting = `
    ${isLoggedIn ? 'Welcome back!' : 'Please log in.'}
`;
console.log(greeting);
