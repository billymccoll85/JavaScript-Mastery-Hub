let array = [1, 2, 3, 4, 5];

// Add/Remove Items
array.push(6);            // Add to the end
array.pop();              // Remove from the end
array.shift();            // Remove from the front
array.unshift(0);         // Add to the front
array.splice(2, 0, 2.5);  // Splice for adding/removing items

// New ES2023 Methods for Immutability
let newArray = array.toSpliced(2, 1);   // Similar to splice, but immutable
let reversedArray = array.toReversed();  // Similar to reverse, but immutable
let sortedArray = array.toSorted();      // Similar to sort, but immutable

// Find Items
array.includes(2);       // Check if includes item
array.indexOf(2);        // First index of item
array.lastIndexOf(2);    // Last index of item
array.find(x => x > 2);  // Find item by predicate
array.findIndex(x => x > 2); // Find item index by predicate
array.findLast(x => x > 2); // ES2023: Find last item by predicate
array.findLastIndex(x => x > 2); // ES2023: Find last item index by predicate

// Iterate Items
array.forEach((item, index) => { /* ... */ });
array.map(x => x * 2);    // Create a new array by mapping each item
array.filter(x => x > 2); // Create a new array by filtering items
array.reduce((acc, x) => acc + x, 0); // Reduce to a single value

// Others
array.slice(1, 3);       // Get a sub-array
array.some(x => x > 2);   // Check if any items match
array.every(x => x > 2);  // Check if all items match
array.flat();             // Flatten nested arrays
array.flatMap(x => [x, x * 2]); // Map and flatten

// Conversions
array.join(' - ');       // Convert to string with separator
Array.from('123', x => +x); // Create from iterable with map function
Array.of(1, 2, 3);       // Create from arguments

// Checking
Array.isArray(array);    // Check if is an array

// ES2023: Iterate with own methods
let keys = array.keys(); // Iterator of keys
let values = array.values(); // Iterator of values
let entries = array.entries(); // Iterator of [key, value] pairs
