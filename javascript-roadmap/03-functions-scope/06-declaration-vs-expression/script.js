// Function Declaration
function addDollarSign(value) {
  return `$${value}`;
}

// When using declarations, you can invoke the function before the declaration. With expressions, you cannot.
console.log(addDollarSign(100));

// Function Expression
const addPlusSign = (value) => `+${value}`;

console.log(addPlusSign(200));
