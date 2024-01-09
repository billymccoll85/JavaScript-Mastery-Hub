let x;

// Coerced to a string
x = 15 + '5';

x = 15 + Number('5');

// Coerced to a number
x = 15 * '5';

// null is coerced to 0 as it is a `falsy` value
x = 15 + null;

x = Number(null);

x = Number(true);
x = Number(false);

// true is coerced to a 1
x = 15 + true;

// false is coerced to 0 (falsy)
x = 15 + false;

// Undefined is coerced to 0 (falsy)
x = 15 + undefined;

console.log(x, typeof x);
