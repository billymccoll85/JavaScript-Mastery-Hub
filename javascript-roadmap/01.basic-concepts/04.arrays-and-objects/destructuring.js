const firstName = 'Alice';
const lastName = 'Smith';
const age = 25;

const person = {
    firstName,
    lastName,
    age,
};

console.log(person.age);

// Destructuring object properties

const task = {
    taskId: 1,
    taskTitle: 'Complete assignment',
    assignedUser: {
        userName: 'Alice',
    },
};

const {
    taskId: myTaskId, // rename taskId to myTaskId
    taskTitle,
    assignedUser: { userName }, // destructuring multiple levels
} = task;

console.log(myTaskId);

// Destructuring arrays & using the rest/spread operator
const numbers = [10, 20, 30, 40, 50];

const [firstNum, secondNum, ...restNums] = numbers;

console.log(firstNum, secondNum, restNums);


const car = {
    brand: 'Tesla',
    model: 'Model S',
    year: 2022,
    engine: {
        type: 'Electric',
        power: 'Dual Motor',
    },
    features: {
        seats: 5,
        color: 'Red',
        autopilot: true,
    },
};

const { brand, model, year, engine, features } = car;
const { type, power } = engine;
const { seats, color, autopilot } = features;

console.log(brand); // Output: Tesla
console.log(model); // Output: Model S
console.log(year); // Output: 2022
console.log(type); // Output: Electric
console.log(power); // Output: Dual Motor
console.log(seats); // Output: 5
console.log(color); // Output: Red
console.log(autopilot); // Output: true

