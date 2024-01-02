// Example: Calculating the factorial of a number using recursion

function factorial(n) {
    // Base case: if n is 0 or 1, return 1
    if (n === 0 || n === 1) {
        return 1;
    }
    
    // Recursive case: call the factorial function with n-1 and multiply it with n
    return n * factorial(n - 1);
}

// Testing the factorial function
console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
console.log(factorial(1)); // Output: 1
