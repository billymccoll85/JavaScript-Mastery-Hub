// Array of quotes
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt"
];

// Function to generate a random quote
function generateRandomQuote() {
    // Get a random index from the quotes array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    
    // Get the quote at the random index
    const randomQuote = quotes[randomIndex];
    
    // Create a new DOM element to display the quote
    const quoteElement = document.createElement('p');
    quoteElement.textContent = randomQuote;
    
    // Append the quote element to the document body
    document.body.appendChild(quoteElement);
}

// Call the function to generate a random quote
generateRandomQuote();
