// IIFE Syntax (Has its own scope and runs immediately)
(() => {
  const user = 'John';
  console.log(user);
  const hello = () => console.log('Hello from the IIFE');
  hello();
})();

// Params
((name) => {
  console.log(`Hello ${name}`);
})('Shawn');

// Named IIFE (Can only be called recursively)
(function hello() {
  console.log('Hello');
})();
