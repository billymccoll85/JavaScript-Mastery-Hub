// Using let and const instead of var
const x = 100;

// An If statement is a block
if (true) {
  console.log(x);
  const y = 200;
  console.log(x + y);
}

// console.log(y); // ReferenceError: y is not defined

// A loop is a block
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// console.log(i); // ReferenceError: i is not defined

// Using let instead of var
if (true) {
  const a = 500;
  let b = 600;
  let c = 700;
}

// console.log(c); // ReferenceError: c is not defined

// var IS function scoped
function run() {
  let d = 100;
  console.log(d);
}

run();

// console.log(d); // ReferenceError: d is not defined

const foo = 1;
let bar = 2; // Not added to the global object
