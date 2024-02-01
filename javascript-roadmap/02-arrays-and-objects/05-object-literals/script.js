// Creating an object
const person = {
  name: 'John Doe',
  age: 30,
  isAdmin: true,
  address: {
    street: '12  dave st',
    city: 'London',
  },
  hobbies: ['music', 'sports'],
};

// Accessing object properties
const { name, age, address, hobbies } = person;
const { street, city, state } = address;
const firstHobby = hobbies[0];

// Updating properties
person.name = 'Jane Doe';
person.isAdmin = false;

// Deleting properties
delete person.age;

// Create new properties
person.hasChildren = true;

// Add functions
person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

person.greet();

// Keys with multiple words
const person2 = {
  firstName: 'Brad',
  lastName: 'Traversy',
};

const { firstName } = person2;

console.log(firstName);
// Update address to UK address
person.address.street = '10 Downing Street';
person.address.city = 'London';

// Update names to UK names
person.name = 'John Smith';
person2.firstName = 'William';

console.log(person);
console.log(person2);
