// Log number
console.log(123);
console.log(50);

// Log string
console.log('Hi there');

// Log multiple values
console.log(10, 'Hey', false);

// Log a variable
const y = 50;
console.log(y);

// Console error & warning
console.error('Error');
console.warn('Caution');

// Log object as table
console.table({ name: 'John', email: 'john@example.com' });

// Group console commands
console.group('simple');
console.log(y);
console.error('Error');
console.warn('Caution');
console.groupEnd();

// Add CSS to logs
const styles = 'padding: 10px; background-color: white; color: blue';
console.log('%cHello World', styles);
