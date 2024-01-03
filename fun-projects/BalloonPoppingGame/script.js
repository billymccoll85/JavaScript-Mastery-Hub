let score = 0; // Variable to keep track of the player's score
let lives = 3; // Variable to keep track of the player's lives
let gameInterval; // Interval for creating new balloons

// Wait for the DOM to be fully loaded before starting the game
document.addEventListener('DOMContentLoaded', () => {
  const gameArea = document.getElementById('gameArea');
  startGame(); // Call to start the game

  // Function to start the game
  function startGame() {
    gameInterval = setInterval(createBalloon, 1000); // Create a new balloon every second
  }

  // Function to create a new balloon
  function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');

    // Set random size for better clickability
    const size = Math.random() * (80 - 40) + 40; // Sizes between 40px and 80px
    balloon.style.width = `${size}px`;
    balloon.style.height = `${size}px`;
    balloon.style.left = `${Math.random() * (gameArea.offsetWidth - size)}px`;

    // Slow down the ascent speed of the balloon
    const duration = Math.random() * (20 - 10) + 10; // Duration between 10s and 20s
    balloon.style.animationDuration = `${duration}s`;

    balloon.addEventListener('click', popBalloon); // Event listener for popping the balloon
    gameArea.appendChild(balloon);

    // Remove the balloon and lose a life if not popped in time
    setTimeout(() => {
      if (balloon.parentNode) {
        balloon.remove();
        loseLife();
      }
    }, duration * 1000);
  }

  // Function to handle balloon popping
  function popBalloon(event) {
    event.target.remove(); // Remove the popped balloon
    score++; // Increment score
    updateScoreDisplay(); // Update the score display
  }

  // Function to handle losing a life
  function loseLife() {
    lives--; // Decrement lives
    updateLivesDisplay(); // Update the lives display
    if (lives <= 0) {
      endGame(); // End the game if no lives left
    }
  }

  // Function to update the score display
  function updateScoreDisplay() {
    const scoreDisplay = document.getElementById('score');
    scoreDisplay.textContent = `Score: ${score}`;
  }

  // Function to update the lives display
  function updateLivesDisplay() {
    const livesDisplay = document.getElementById('lives');
    livesDisplay.textContent = `Lives: ${lives}`;
  }

  // Function to end the game
  function endGame() {
    clearInterval(gameInterval); // Stop creating new balloons
    const restart = confirm('Game Over! Do you want to restart?'); // Ask player to restart
    if (restart) {
      resetGame(); // Reset the game if player chooses to restart
    }
  }

  // Function to reset the game
  function resetGame() {
    score = 0; // Reset score
    lives = 3; // Reset lives
    updateScoreDisplay(); // Update score display
    updateLivesDisplay(); // Update lives display
    document.querySelectorAll('.balloon').forEach(balloon => balloon.remove()); // Remove all balloons
    startGame(); // Start the game again
  }
});
