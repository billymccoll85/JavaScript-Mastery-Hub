// Global scope variable
let x = 100;

console.log(x, 'in global');

function run() {
  // Access global variables in functions
  console.log(window.innerHeight);
  console.log(x, 'in function');
}

run();

// Access global variables in blocks
if (true) {
  console.log(x, 'in block');
}

function add() {
  // Overwriting global x (variable shadowing)
  const x = 1;
  const y = 50;
  console.log(x + y);
}

// Cannot access a function-scoped variable in global scope
// console.log(y);

add();
