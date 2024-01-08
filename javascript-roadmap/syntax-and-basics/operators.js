// Arithmetic Operators
// Perform mathematical calculations
const addition = 5 + 3; // Adds two numbers: 5 + 3 = 8
const subtraction = 10 - 4; // Subtracts two numbers: 10 - 4 = 6
const multiplication = 2 * 6; // Multiplies two numbers: 2 * 6 = 12
const division = 15 / 3; // Divides two numbers: 15 / 3 = 5
const modulus = 10 % 3; // Returns the remainder of a division: 10 % 3 = 1

// Assignment Operators
// Assign values to variables
let x = 5; // Assigns the value 5 to variable x
let y = 10;
y += 5; // Equivalent to y = y + 5, assigns the value of y + 5 to y

// Comparison Operators
// Compare values and return a boolean result
const isEqual = 5 === 5; // Checks if two values are equal: 5 === 5 (true)
const isNotEqual = 5 !== 10; // Checks if two values are not equal: 5 !== 10 (true)
const isGreater = 10 > 5; // Checks if one value is greater than another: 10 > 5 (true)
const isLess = 3 < 8; // Checks if one value is less than another: 3 < 8 (true)
const isGreaterOrEqual = 7 >= 7; // Checks if one value is greater than or equal to another: 7 >= 7 (true)
const isLessOrEqual = 4 <= 6; // Checks if one value is less than or equal to another: 4 <= 6 (true)

// Logical Operators
// Combine or negate boolean values
const logicalAnd = true && false; // Returns true if both operands are true: true && false (false)
const logicalOr = true || false; // Returns true if either operand is true: true || false (true)
const logicalNot = !true; // Negates a boolean value: !true (false)

// Unary Operators
// Perform operations on a single operand
let num = 5;
num++; // Equivalent to num = num + 1, increments the value of num by 1
let isTrue = true;
isTrue = !isTrue; // Negates the value of isTrue

// Ternary Operator
// Provides a shorthand way to write conditional statements
const age = 18;
const isAdult = age >= 18 ? 'Adult' : 'Not Adult'; // Checks if age is greater than or equal to 18, returns 'Adult' if true, 'Not Adult' if false

// String Concatenation Operator
// Concatenates two or more strings
const firstName = 'John';
const lastName = 'Doe';
const fullName = firstName + ' ' + lastName; // Concatenates firstName, a space, and lastName: 'John Doe'
