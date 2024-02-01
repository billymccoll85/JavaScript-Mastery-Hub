// String
const fullName = 'John';

// Number
const age = 25;
const temperature = 98.6;

// Boolean
const hasPets = false;

// Null
const apartmentNumber = null;

// Undefined
// let score;
const score = undefined;

// Symbol
const uniqueId = Symbol('id');

// BigInt
const bigNumber = 9007199254740991n;

// Reference Types

const numbersArray = [1, 2, 3, 4];

const personObject = {
  name: 'Alice',
};

function greet() {
  console.log('Hi there');
}

const outputFunction = greet;

console.log(outputFunction, typeof outputFunction);

// More info on why typeof null == object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

//  More info on the "function object" type
// https://262.ecma-international.org/5.1/#sec-11.4.3
