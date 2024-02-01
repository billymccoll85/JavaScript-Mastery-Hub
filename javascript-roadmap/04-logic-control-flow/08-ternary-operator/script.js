const age = 17;

// Using an if statement
if (age >= 18) {
  console.log('You can vote!');
} else {
  console.log('You cannot vote');
}

// Using a ternary operator
console.log(age >= 18 ? 'You can vote!' : 'You cannot vote');

// Assigning a conditional value to a variable
const canVote = age >= 18;
const canVote2 = age >= 18 ? 'You can vote!' : 'You cannot vote';

console.log(canVote);
console.log(canVote2);

// Multiple statements
const auth = true;

// Long version
// let redirect;

// if (auth) {
//   alert('Welcome to the dashboard');
//   redirect = '/dashboard';
// } else {
//   alert('Access Denied');
//   redirect = '/login';
// }

// Shorter ternary version
const redirect = auth
  ? (console.log('Welcome to the dashboard'), '/dashboard')
  : (console.log('Access Denied'), '/login');

console.log(redirect);

// Ternary with no else
auth && console.log('Welcome to the dashboard');
