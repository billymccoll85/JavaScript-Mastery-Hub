// Logical AND (&&) - All conditions must be true
console.log(10 < 20 && 30 > 15 && 40 > 30);

// Logical OR (||) - At least one condition must be true
console.log(10 > 20 || 30 < 15);

// Logical AND (&&) - Returns the first falsy value or the last value
let a;

a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && '' && 0 && 30;

console.log(a);

// Logical AND (&&) with console.log
const posts = ['Post One', 'Post Two'];
posts.length > 0 && console.log(posts[0]);

// Logical OR (||) - Returns the first truthy value or the last value
let b;

b = 10 || 20;
b = 0 || 20;
b = 0 || null || '' || undefined;

console.log(b);

// Nullish Coalescing (??) - Returns the right side operand when the left is null or undefined
let c;

c = 10 ?? 20;
c = null ?? 20;
c = undefined ?? 30;
c = 0 ?? 30;
c = '' ?? 30;

console.log(c);
