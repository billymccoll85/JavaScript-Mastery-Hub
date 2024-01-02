// Get the current date and time
const currentDate = new Date();

// Get the individual components of the date and time
const year = currentDate.getFullYear(); // Get the current year
const month = currentDate.getMonth() + 1; // Get the current month (zero-based, so we add 1)
const day = currentDate.getDate(); // Get the current day
const hours = currentDate.getHours(); // Get the current hour
const minutes = currentDate.getMinutes(); // Get the current minute
const seconds = currentDate.getSeconds(); // Get the current second

// Get the current day of the week
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayOfWeek = daysOfWeek[currentDate.getDay()]; // Get the current day of the week

// Display the current date, time, and day of the week
console.log(`Current Date and Time: ${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);
console.log(`Current Day of the Week: ${dayOfWeek}`);

// Calculate the number of days remaining in the current month
const lastDayOfMonth = new Date(year, month, 0).getDate();
const daysRemaining = lastDayOfMonth - day;
console.log(`Days Remaining in the Month: ${daysRemaining}`);
