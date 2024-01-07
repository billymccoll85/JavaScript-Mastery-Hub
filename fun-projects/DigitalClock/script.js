// Get DOM elements
const hourElement = document.getElementById('hour');
const minuteElement = document.getElementById('minute');
const secondElement = document.getElementById('second');

// Function to update the clock
function updateClock() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  // Update DOM elements
  hourElement.textContent = hour.toString().padStart(2, '0');
  minuteElement.textContent = minute.toString().padStart(2, '0');
  secondElement.textContent = second.toString().padStart(2, '0');
}

// Initialize clock
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);
