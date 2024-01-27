// Constants for suits and values
const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

// Selectors for HTML elements
const playerHandDiv = document.getElementById('player-hand');
const dealerHandDiv = document.getElementById('dealer-hand');
const playerBalanceDiv = document.getElementById('balance');
const hitButton = document.getElementById('hit');
const standButton = document.getElementById('stand');
const newGameButton = document.getElementById('new-game');
const betAmountInput = document.getElementById('bet-amount');
const dealButton = document.getElementById('deal');

// Player and dealer hand
let playerHand = [];
let dealerHand = [];

// Player's balance and current bet
let balance = localStorage.getItem('balance') ? parseInt(localStorage.getItem('balance'), 10) : 100;
let currentBet = 0;
let deck = [];

// Function to create a new deck of cards
function createDeck() {
    let deck = [];
    for (let suit of suits) {
        for (let value of values) {
            deck.push({ suit, value });
        }
    }
    return deck;
}

// Function to shuffle the deck
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]]; // Swap elements
    }
}

// Function to deal a card from the deck
function dealCard(deck) {
    return deck.pop();
}

// Function to get the value of a hand
function getHandValue(hand) {
    let value = 0;
    let aceCount = 0;
    for (let card of hand) {
        if (card.value === 'A') {
            aceCount++;
            value += 11;
        } else if (['J', 'Q', 'K'].includes(card.value)) {
            value += 10;
        } else {
            value += parseInt(card.value, 10);
        }
    }
    while (value > 21 && aceCount > 0) {
        value -= 10;
        aceCount--;
    }
    return value;
}

// Function to start a new game
function newGame() {
    resetGame(); // Reset the game state without dealing cards
    // Reset the bet only if it's greater than the balance
    if (currentBet > balance) {
        currentBet = 0;
        updateGameUI();
    }
}

// Function to generate the image URL for a card
function getCardImageUrl(card) {
    const suitMap = {
        'c': 'clubs',
        'd': 'diamonds',
        'h': 'hearts',
        's': 'spades'
    };

    const suit = suitMap[card.suit];
    const value = card.value;

    return `img/${suit}${value}.png`;
}

// Function to update the game UI
function updateGameUI() {
    const playerHandHtml = playerHand.map(card => `<img src="${getCardImageUrl(card)}" class="card-image">`).join('');
    const dealerHandHtml = dealerHand.map(card => `<img src="${getCardImageUrl(card)}" class="card-image">`).join('');

    playerHandDiv.innerHTML = `Player Hand (${getHandValue(playerHand)}): ${playerHandHtml}`;
    dealerHandDiv.innerHTML = `Dealer Hand (${getHandValue(dealerHand)}): ${dealerHandHtml}`;
    playerBalanceDiv.textContent = `Balance: $${balance}`;
    betAmountInput.value = currentBet;
}

// Function to handle 'hit' action
function hit() {
    if (playerHand.length < 5) {
        playerHand.push(dealCard(deck));
        updateGameUI();
        if (getHandValue(playerHand) > 21 || playerHand.length === 5) {
            finalizeGame();
        }
    } else {
        alert("Maximum of 5 cards reached.");
    }
}

// Function to handle 'stand' action
function stand() {
    while (getHandValue(dealerHand) < 17) {
        dealerHand.push(dealCard(deck));
    }
    finalizeGame();
}


// Function to finalize the game, check for winner and update the balance
function finalizeGame() {
    let playerValue = getHandValue(playerHand);
    let dealerValue = getHandValue(dealerHand);

    // Show the dealer's full hand and score
    updateGameUI(); // Ensure the latest dealer hand is shown

    if (playerValue > 21) {
        alert("Bust! You've lost your bet.");
    } else if (dealerValue > 21 || playerValue > dealerValue) {
        alert("You win!");
        balance += currentBet * 2; // Pay out the winnings
    } else if (playerValue === dealerValue) {
        alert("It's a push!");
        balance += currentBet; // Return the bet
    } else {
        alert("Dealer wins!");
    }
    
    // Reset the current bet and prepare for a new game
    currentBet = 0;
    localStorage.setItem('balance', balance.toString());
    resetGame();
}

// Function to reset the game
function resetGame() {
    playerHand = [];
    dealerHand = [];
    deck = createDeck();
    shuffleDeck(deck);
    updateGameUI(); // Update UI without dealing new cards
}

function dealCards() {
    if (currentBet === 0) {
        alert("Please place a bet before dealing cards.");
        return;
    }
    if (playerHand.length === 0 && dealerHand.length === 0) {
        // Deal cards only if hands are empty
        playerHand.push(dealCard(deck), dealCard(deck));
        dealerHand.push(dealCard(deck), dealCard(deck));
        updateGameUI();
    }
}

// Event listeners for player actions
hitButton.addEventListener('click', () => hit());
standButton.addEventListener('click', () => stand());

// Add functionality for custom bet input
betAmountInput.addEventListener('change', (e) => {
    let betInput = parseInt(e.target.value, 10);
    if (isNaN(betInput) || betInput <= 0) {
        alert("Please enter a valid bet amount.");
    } else if (betInput > balance) {
        alert("Bet amount exceeds current balance.");
    } else {
        currentBet = betInput;
        updateGameUI();
    }
});

// Selecting predefined bet amounts
document.querySelectorAll('.bet-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const betValue = parseInt(e.target.textContent, 10);
        if (betValue > balance) {
            alert("Bet amount exceeds current balance.");
            return;
        }
        currentBet = betValue;
        updateGameUI();
    });
});

// Rest of the event listeners and game functions

// Function to check if the game should be finalized based on the dealer's hand
function checkDealerHand() {
    let dealerValue = getHandValue(dealerHand);
    if (dealerValue >= 17) {
        finalizeGame();
    } else {
        // Dealer hits if the total value is less than 17
        dealerHand.push(dealCard(deck));
        updateGameUI();
        checkDealerHand(); // Recursively check if the dealer should hit again
    }
}

// Modified stand function to use the new dealer hand check
function stand() {
    // Player chooses to stand, check the dealer's hand
    checkDealerHand();
}

// Event listener for the 'Deal' button
dealButton.addEventListener('click', dealCards);

// Event listener for the 'New Game' button
newGameButton.addEventListener('click', newGame);

// Initialize the game with an empty deck and update UI accordingly
deck = createDeck();
shuffleDeck(deck);
updateGameUI();

// Ensure that the game is ready to be played upon page load
resetGame();
