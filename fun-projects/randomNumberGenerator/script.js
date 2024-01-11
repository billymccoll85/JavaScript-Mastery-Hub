const wheelElement = document.querySelector('.wheel');
const numberElement = document.getElementById("number");
const spinBtn = document.getElementById("spinBtn");

// Function to set the initial state
function setInitialState() {
  numberElement.textContent = "0";
  wheelElement.style.backgroundColor = "#0000ff";  // Set to white or any default color you prefer
}

// Set initial state when the page loads
setInitialState();

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to generate a random number between 1 and 100
function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// Function to spin the wheel and display the number
function spinWheel() {
  let deg = 0;
  
  const spinInterval = setInterval(() => {
    // Generate and display a random number and color
    const randomNumber = generateRandomNumber();
    const randomColor = getRandomColor();
    
    numberElement.textContent = randomNumber;
    wheelElement.style.backgroundColor = randomColor;
    
    // Update the rotation
    wheelElement.style.transition = 'transform 0.05s linear';
    deg += 10;
    wheelElement.style.transform = `rotate(${deg}deg)`;
  }, 50);

  // Stop spinning after 5 seconds and display the final number and color
  setTimeout(() => {
    clearInterval(spinInterval);
    
    // Generate and display the final random number and color
    const finalNumber = generateRandomNumber();
    const finalColor = getRandomColor();
    
    numberElement.textContent = finalNumber;
    wheelElement.style.backgroundColor = finalColor;
    
    // Clear the rotation so the number displays correctly
    wheelElement.style.transition = 'none';
    wheelElement.style.transform = 'none';
  }, 5000);
}

// Event listener for the spin button
spinBtn.addEventListener("click", spinWheel);
