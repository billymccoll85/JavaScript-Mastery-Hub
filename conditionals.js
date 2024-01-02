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

// Switch Statement
// Use case: Execute different blocks of code based on the value of a variable
switch (dayOfWeek) {
    case "Monday":
        console.log("It's the start of the week.");
        break;
    case "Friday":
        console.log("It's the end of the week.");
        break;
    default:
        console.log("It's a regular day.");
}

// Ternary Operator (Shorthand for if-else)
// Use case: Assign a value or execute a block of code based on a condition in a concise way
const message = isMorning ? "Good morning!" : "Good day!";
console.log(message);

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
