// Set the initial time in seconds
let time = 0;

// Function to start the timer
function startTimer() {
    // Increment the time by 1 every second
    setInterval(() => {
        time++;
        console.log(time);
    }, 1000);
}

// Call the startTimer function to start the timer
startTimer();
