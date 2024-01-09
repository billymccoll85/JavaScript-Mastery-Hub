const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
    console.log(number);
});

const cars = ['Toyota', 'Honda', 'Ford', 'Chevrolet'];

// View prototype chain
console.log(cars.__proto__);

// Long form
cars.forEach(function (car) {
    console.log(car);
});

// Short form
cars.forEach((car) => console.log(car));

// We can also pass in the index and original array
cars.forEach((car, index, arr) => console.log(`${index} - ${car}`, arr));

// Using a named function
function logCar(car) {
    console.log(car);
}

cars.forEach(logCar);

// Array of objects
const carObjs = [
    { make: 'Toyota', model: 'Camry', year: 2020 },
    { make: 'Honda', model: 'Civic', year: 2021 },
    { make: 'Ford', model: 'Mustang', year: 2019 },
    { make: 'Chevrolet', model: 'Cruze', year: 2022 },
];

carObjs.forEach((car) => console.log(car.make, car.model, car.year));
