// Select the clock and its hands from the DOM
const clockContainer = document.querySelector('.clock');
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

// Function to rotate the clock hands
function rotateClockHands() {
    // Get the current date and time
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    // Calculate the rotation for each hand
    const hourRotation = (hours * 30) + (minutes / 2); // Each hour represents 30 degrees
    const minuteRotation = (minutes * 6) + (seconds / 10); // Each minute represents 6 degrees
    const secondRotation = seconds * 6; // Each second represents 6 degrees

    // Apply the rotation to each hand
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
}

// Call the rotateClockHands function every 1000ms (1 second)
setInterval(rotateClockHands, 1000);