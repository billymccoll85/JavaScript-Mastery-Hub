// Value is stored in the stack
const firstName = 'John';
const userAge = 30;

// Reference is stored in the heap
const user = {
  name: 'Brad',
  age: 40,
};

let newFirstName = firstName;
newFirstName = 'Jonathan';

let newUser = user;
newUser.name = 'Bradley';

console.log(firstName, newFirstName); // John, Jonathan
console.log(user, newUser); // { name: 'Bradley', age: 40 }, { name: 'Bradley', age: 40 }
