// Define an object
const person = {
    name: "John", // Property

    // Method
    sayHello: function() {
        console.log("Hello, my name is " + this.name);
    }
};

// Call the method
person.sayHello(); // Output: Hello, my name is John
