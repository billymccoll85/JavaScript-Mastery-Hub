/*
The if statement is a fundamental control flow statement in JavaScript. It allows you to execute a block of code only if a certain condition is true. Here's how it works:

The if keyword is followed by a set of parentheses (). Inside the parentheses, you specify the condition that you want to evaluate. This condition should be an expression that results in a boolean value (true or false).

After the closing parenthesis, you open a block of code using curly braces {}. This block of code contains the statements that will be executed if the condition is true.

If the condition inside the parentheses is true, the block of code inside the curly braces will be executed. If the condition is false, the block of code will be skipped, and the program will continue to the next statement after the if block.

Here's an example:
let age = 20;

if (age >= 18) {
    console.log("You are eligible to vote.");
}

In this example, the condition age >= 18 is evaluated. If the value of age is greater than or equal to 18, the message "You are eligible to vote." will be printed to the console. Otherwise, nothing will happen.

It's important to note that the block of code inside the if statement can contain multiple statements, separated by semicolons. You can also nest if statements inside each other to create more complex conditional logic.
*/


// If Statement
// Use case: Execute a block of code if a condition is true
if (age >= 18) {
    console.log("You are eligible to vote.");
}

// If-Else Statement
// Use case: Execute one block of code if a condition is true, and another block if it's false
if (temperature > 30) {
    console.log("It's hot outside.");
} else {
    console.log("It's not too hot today.");
}

// Else If Statement
// Use case: Execute different blocks of code based on multiple conditions
if (score >= 90) {
    console.log("You got an A grade.");
} else if (score >= 80) {
    console.log("You got a B grade.");
} else {
    console.log("You need to improve your score.");
}

// Logical AND (&&) Short-circuit Evaluation (Shorthand)
// Use case: Execute a block of code if multiple conditions are true
if (isLogged && hasPermission) {
    console.log("Access granted.");
}

// Logical OR (||) Short-circuit Evaluation (Shorthand)
// Use case: Execute a block of code if at least one of multiple conditions is true
if (isPremiumUser || hasDiscount) {
    console.log("You are eligible for a special offer.");
}

// Code Challenge: Voting Eligibility
// Write a function that takes an age as a parameter and returns a string indicating whether the person is eligible to vote or not.
function checkVotingEligibility(age) {
    if (age >= 18) {
        return "You are eligible to vote.";
    } else {
        return "You are not eligible to vote yet.";
    }
}

console.log(checkVotingEligibility(16)); // Output: You are not eligible to vote yet.
console.log(checkVotingEligibility(21)); // Output: You are eligible to vote.
