// Game variables
const gameBoard = document.getElementById('gameBoard');
const messageEl = document.getElementById('message');
const cardValues = ['🍎', '🍎', '🍐', '🍐', '🍊', '🍊', '🍋', '🍋'];
let flippedCards = [];
let matchedCards = 0;
let isBoardLocked = false;  // To prevent more than 2 cards from being clicked

// Shuffle and then display the cards
shuffleArray(cardValues);
displayCards(cardValues);

// Reveal cards initially, then hide them
setTimeout(() => {
  gameBoard.querySelectorAll('.card').forEach(card => {
    card.textContent = '';
  });
}, 3000);

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayCards(cards) {
  // Clear the game board
  gameBoard.innerHTML = '';
  
  cards.forEach((card, index) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.dataset.value = card;
    cardElement.textContent = card;  // Display cards initially
    cardElement.addEventListener('click', handleCardClick);
    gameBoard.appendChild(cardElement);
  });
}

function handleCardClick(event) {
  if (isBoardLocked) return;

  const clickedCard = event.currentTarget;

  // Ignore matched or already flipped cards
  if (clickedCard.classList.contains('matched') || clickedCard.classList.contains('flipped')) {
    return;
  }

  // Flip the card
  clickedCard.classList.add('flipped');
  clickedCard.textContent = clickedCard.dataset.value;
  flippedCards.push(clickedCard);

  // Check for a match
  if (flippedCards.length === 2) {
    isBoardLocked = true;  // Lock the board

    if (flippedCards[0].dataset.value === flippedCards[1].dataset.value) {
      flippedCards.forEach(card => card.classList.add('matched'));
      matchedCards += 2;
      showMessage('Pair found!', true);

      if (matchedCards === cardValues.length) {
        showMessage('You won!', false);
      }
    } else {
      setTimeout(() => {
        flippedCards.forEach(card => card.classList.remove('flipped'));
        flippedCards.forEach(card => (card.textContent = ''));
      }, 1000);
    }
    setTimeout(() => {
      flippedCards = [];
      isBoardLocked = false;  // Unlock the board
    }, 1000);
  }
}

function showMessage(message, isTemporary) {
  messageEl.textContent = message;
  messageEl.style.opacity = 1;

  if (isTemporary) {
    setTimeout(() => {
      messageEl.style.opacity = 0;
    }, 1000);
  }
}
