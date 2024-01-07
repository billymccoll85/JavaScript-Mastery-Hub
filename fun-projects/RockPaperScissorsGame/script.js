// Emojis for the choices
const emojis = {
    'Rock': '🪨',
    'Paper': '📄',
    'Scissors': '✂️'
};

// Cached DOM elements
const playerChoiceEl = document.querySelector('#playerChoice');
const computerChoiceEl = document.querySelector('#computerChoice');
const resultEl = document.querySelector('#result');

// Event listeners for buttons
document.querySelector('#rock').addEventListener('click', () => game('Rock'));
document.querySelector('#paper').addEventListener('click', () => game('Paper'));
document.querySelector('#scissors').addEventListener('click', () => game('Scissors'));
  
function game(playerChoice) {
    // Display player choice with emoji
    playerChoiceEl.textContent = `You chose: ${emojis[playerChoice]}`;
    
    // Computer choice with emoji
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];
    computerChoiceEl.textContent = `Computer chose: ${emojis[computerChoice]}`;
    
    // Determine winner
    if (playerChoice === computerChoice) {
      resultEl.textContent = "It's a tie! 😐";
      resultEl.style.color = 'orange';
    } else if ((playerChoice === 'Rock' && computerChoice === 'Scissors') ||
               (playerChoice === 'Scissors' && computerChoice === 'Paper') ||
               (playerChoice === 'Paper' && computerChoice === 'Rock')) {
      resultEl.textContent = 'You win! 🥳';
      resultEl.style.color = 'green';
    } else {
      resultEl.textContent = 'You lose! 😢';
      resultEl.style.color = 'red';
    }
}
  