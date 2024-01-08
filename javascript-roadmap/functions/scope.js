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
}

console.log(globalVariable); // Output: I am a global variable
console.log(constantVariable); // Output: I am a constant variable
console.log(localVariable); // Output: ReferenceError: localVariable is not defined
console.log(localConstantVariable); // Output: ReferenceError: localConstantVariable is not defined

myFunction();
