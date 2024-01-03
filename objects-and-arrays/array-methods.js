// Define a variable
let x;

// Create an array
const arr = [28, 38, 44, 29, 109];

// push() - Add a value to the end of the array
arr.push(100);

// pop() - Remove the last value from the array
arr.pop();

// unshift() - Add a value to the beginning of the array
arr.unshift(99);

// shift() - Remove the first value from the array
arr.shift();

// reverse() - Reverse the order of the array elements
arr.reverse();

// includes() - Check if a value is present in the array
x = arr.includes(445);

// indexOf() - Find the index of the first occurrence of a value in the array
x = arr.indexOf(28);

// Convert the array to a string
x = arr.toString();
x = arr.join();

// slice() - Create a new array with selected elements from the original array
x = arr.slice(1, 4);

// splice() - Remove or replace elements in the array
x = arr.splice(1, 4);

// Remove a single element from the array
x = arr.splice(4, 1);

// Chaining methods - Combine multiple array methods together
x = arr.slice(1, 4).reverse().toString().charAt(0);

console.log(x);

// Real-world example for each method:

// push() - Adding a new item to a shopping cart
const shoppingCart = ['apple', 'banana', 'orange'];
shoppingCart.push('grapes');

// pop() - Removing the last item from a shopping cart
shoppingCart.pop();

// unshift() - Adding a new item to the beginning of a to-do list
const toDoList = ['Buy groceries', 'Pay bills', 'Clean the house'];
toDoList.unshift('Walk the dog');

// shift() - Removing the first item from a to-do list
toDoList.shift();

// reverse() - Reversing the order of a playlist
const playlist = ['song1', 'song2', 'song3'];
playlist.reverse();

// includes() - Checking if a username is taken
const usernames = ['john', 'mary', 'alex'];
const isTaken = usernames.includes('alex');

// indexOf() - Finding the index of a specific book in a library catalog
const libraryCatalog = ['book1', 'book2', 'book3'];
const bookIndex = libraryCatalog.indexOf('book2');

// slice() - Creating a new array with selected items from a menu
const menu = ['pizza', 'burger', 'salad', 'pasta'];
const selectedItems = menu.slice(1, 3);

// splice() - Removing or replacing items in a shopping list
const shoppingList = ['milk', 'bread', 'eggs', 'butter'];
shoppingList.splice(2, 1);

// Convert the array to a string
const stringArray = ['Hello', 'World'];
const string = stringArray.toString();
