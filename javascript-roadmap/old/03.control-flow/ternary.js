/*
The JavaScript ternary operator is a concise way to write conditional statements. It allows you to assign a value to a variable based on a condition. The syntax of the ternary operator is as follows:

condition ? value1 : value2;

Here's how it works:

The condition is evaluated. If the condition is true, the value before the : (colon) is assigned to the variable. If the condition is false, the value after the : is assigned.
Let's break down the code on line 28:

In this example, we have nested ternary operators. Here's how it works step by step:
const result = x > y ? "x is greater than y" : x < y ? "x is less than y" : "x is equal to y";

The condition x > y is evaluated. If it is true, the value "x is greater than y" is assigned to the result variable.
If the first condition is false, the second ternary operator x < y ? "x is less than y" : "x is equal to y" is evaluated.
The condition x < y is evaluated. If it is true, the value "x is less than y" is assigned to the result variable.
If the second condition is false, the value "x is equal to y" is assigned to the result variable.
In this case, since x is 10 and y is 5, the condition x > y is true, so the value "x is greater than y" is assigned to the result variable. Therefore, when we log result to the console, we see the output: "x is greater than y".

The ternary operator is a powerful tool for writing concise conditional statements, but it's important to use it judiciously to maintain code readability.
*/


const age = 18; // Define a variable 'age' and assign it a value of 18

const isAdult = age >= 18 ? 'Yes' : 'No';
// Check if the 'age' is greater than or equal to 18
// If the condition is true, assign the value 'Yes' to 'isAdult'
// If the condition is false, assign the value 'No' to 'isAdult'

console.log(isAdult); // Output: Yes
// Print the value of 'isAdult' to the console

const temperature = 25; // Define a variable 'temperature' and assign it a value of 25

const weather = temperature > 30 ? 'Hot' : temperature < 10 ? 'Cold' : 'Moderate';
// Check if the 'temperature' is greater than 30
// If the condition is true, assign the value 'Hot' to 'weather'
// If the condition is false, check if the 'temperature' is less than 10
// If the second condition is true, assign the value 'Cold' to 'weather'
// If both conditions are false, assign the value 'Moderate' to 'weather'

console.log(weather); // Output: Moderate
// Print the value of 'weather' to the console

const x = 10;
const y = 5;

const result = x > y ? "x is greater than y" : x < y ? "x is less than y" : "x is equal to y";

console.log(result); // Output: x is greater than y
