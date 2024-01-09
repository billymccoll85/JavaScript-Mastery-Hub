// Using break statement
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break; // Exit the loop when i equals 5
    }
    console.log(i);
}
// Output: 1 2 3 4

// Using continue statement
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // Skip the current iteration when i is even
    }
    console.log(i);
}
// Output: 1 3 5 7 9
