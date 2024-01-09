// Creating a car object with nested objects
const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    engine: {
        type: 'V6',
        horsepower: 300,
    },
    features: ['GPS', 'Bluetooth', 'Backup camera'],
};

console.log(car.make); // Output: Toyota
console.log(car.engine.type); // Output: V6
console.log(car.features[0]); // Output: GPS