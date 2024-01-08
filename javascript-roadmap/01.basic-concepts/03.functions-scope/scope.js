// Global scope
let globalVariable = "I am a global variable";
const constantVariable = "I am a constant variable";

function myFunction() {
    // Local scope
    let localVariable = "I am a local variable";
    const localConstantVariable = "I am a local constant variable";
    
    console.log(localVariable); // Output: I am a local variable
    console.log(localConstantVariable); // Output: I am a local constant variable
    console.log(globalVariable); // Output: I am a global variable
    console.log(constantVariable); // Output: I am a constant variable

    if (true) {
        // Block scope
        let blockVariable = "I am a block variable";
        const blockConstantVariable = "I am a block constant variable";
        
        console.log(blockVariable); // Output: I am a block variable
        console.log(blockConstantVariable); // Output: I am a block constant variable
        console.log(localVariable); // Output: I am a local variable
        console.log(localConstantVariable); // Output: I am a local constant variable
        console.log(globalVariable); // Output: I am a global variable
        console.log(constantVariable); // Output: I am a constant variable

        if (true) {
            // Nested block scope
            let nestedBlockVariable = "I am a nested block variable";
            const nestedBlockConstantVariable = "I am a nested block constant variable";
            
            console.log(nestedBlockVariable); // Output: I am a nested block variable
            console.log(nestedBlockConstantVariable); // Output: I am a nested block constant variable
            console.log(blockVariable); // Output: I am a block variable
            console.log(blockConstantVariable); // Output: I am a block constant variable
            console.log(localVariable); // Output: I am a local variable
            console.log(localConstantVariable); // Output: I am a local constant variable
            console.log(globalVariable); // Output: I am a global variable
            console.log(constantVariable); // Output: I am a constant variable
        }

        let nestedBlockVariable; // Declare nestedBlockVariable at block scope
        let nestedBlockConstantVariable; // Declare nestedBlockConstantVariable at block scope

        console.log(nestedBlockVariable); // Output: undefined
        console.log(nestedBlockConstantVariable); // Output: undefined
    }

    let blockVariable; // Declare blockVariable at local scope
    let blockConstantVariable; // Declare blockConstantVariable at local scope

    console.log(blockVariable); // Output: undefined
    console.log(blockConstantVariable); // Output: undefined
}

console.log(globalVariable); // Output: I am a global variable
console.log(constantVariable); // Output: I am a constant variable

function myFunction() {
    // Local scope
    let localVariable = "I am a local variable";
    const localConstantVariable = "I am a local constant variable";
    
    console.log(localVariable); // Output: I am a local variable
    console.log(localConstantVariable); // Output: I am a local constant variable

    // Rest of the code inside myFunction()
}

myFunction();


