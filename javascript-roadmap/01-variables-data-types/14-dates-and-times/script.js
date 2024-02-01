// Get today's date and time
let currentDate = new Date();

// Set to a string
let dateString = currentDate.toString();

// Get a specific date
// Important: the month is 0-based, so 0 is January and 11 is December
let specificDate = new Date(2021, 0, 10, 12, 30, 0);

// Pass in a string
let dateFromString1 = new Date('2021-07-10T12:30:00');
let dateFromString2 = new Date('07/10/2021 12:30:00');
let dateFromString3 = new Date('2022-07-10');
let dateFromString4 = new Date('07-10-2022');

// Get current timestamp
let currentTimestamp = Date.now();

// Get the timestamp of a specific date
let specificTimestamp = currentDate.getTime();

// Create a date from a timestamp
let dateFromTimestamp = new Date(1666962049745);

// Convert from milliseconds to seconds
let secondsFromMilliseconds = Math.floor(Date.now() / 1000);

console.log(currentDate, dateString, specificDate, dateFromString1, dateFromString2, dateFromString3, dateFromString4, currentTimestamp, specificTimestamp, dateFromTimestamp, secondsFromMilliseconds);
