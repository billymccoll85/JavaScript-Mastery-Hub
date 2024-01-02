// Object literal
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

// Object constructor
const car = new Object();
car.make = 'Toyota';
car.model = 'Camry';
car.year = 2022;

// Function constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

const book = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);

// Class
class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    sound() {
        console.log('Animal sound');
    }
}

const dog = new Animal('Max', 'Dog');

// Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

const john = new Person('John', 30);

// Singleton
const logger = (function() {
    let instance;

    function createInstance() {
        const log = 'This is a log message';
        return {
            logMessage: function() {
                console.log(log);
            }
        };
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

const loggerInstance = logger.getInstance();
loggerInstance.logMessage();

// ...

// Code Challenge: Create a method in the Animal class that prints the name and type of the animal.
Animal.prototype.printInfo = function() {
    console.log(`Name: ${this.name}, Type: ${this.type}`);
};

dog.printInfo(); // Output: Name: Max, Type: Dog

