// Value is stored in the stack
const name = 'Alice';
const age = 25;

// Reference is stored in the heap
const person = {
  name: 'Emma',
  age: 35,
};

let newName = 'Olivia';
let newPerson = { ...person, name: 'Sophia' };

console.log(name, newName); // Alice, Olivia
console.log(person, newPerson); // { name: 'Emma', age: 35 }, { name: 'Sophia', age: 35 }
