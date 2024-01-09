/*
The reduce() method in JavaScript is used to reduce an array to a single value by applying a function to each element of the array. It takes two arguments: a callback function and an initial value for the accumulator.

The callback function takes two parameters: the accumulator and the current value being processed. It performs some operation on the accumulator and the current value, and returns the updated accumulator. The callback function is executed for each element in the array.

Here's an example of how the reduce() method is used in your code:
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15

In this example, the reduce() method is used to calculate the sum of all the numbers in the numbers array. The initial value of the accumulator is set to 0. The callback function takes the accumulator and the current value, adds them together, and returns the updated accumulator. The reduce() method iterates over each element in the array, updating the accumulator with the sum of all the numbers. Finally, the sum is printed to the console.

You can use the reduce() method to perform various operations on arrays, such as calculating the total price of items in a shopping cart, finding the maximum or minimum value in an array, or transforming an array into a different data structure.

If you have a specific use case or code that you would like me to help you with, please provide more details.
*/

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15

const cart = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 }
];

const total = cart.reduce((accumulator, product) => {
    return accumulator + product.price;
}, 0);

console.log(total); // Output: 60
