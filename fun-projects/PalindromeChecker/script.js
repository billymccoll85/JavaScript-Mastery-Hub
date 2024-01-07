// Add event listener to the 'check' button
document.getElementById('check').addEventListener('click', function() {
        // Get the input word
        const word = document.getElementById('word').value;
        
        // Reverse the word
        const reversedWord = word.split('').reverse().join('');
    
        // Check if the word is a palindrome
        if (word === reversedWord) {
            // Display the result if the word is a palindrome
            document.getElementById('result').textContent = 'The word is a palindrome.';
        } else {
            // Display the result if the word is not a palindrome
            document.getElementById('result').textContent = 'The word is not a palindrome.';
        }
});
