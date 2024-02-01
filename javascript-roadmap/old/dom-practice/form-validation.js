// Get the form element
const form = document.querySelector('#myForm');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the input value
    const input = document.querySelector('#myInput').value;

    // Perform validation
    if (input.trim() === '') {
        alert('Please enter a value');
        return;
    }

    // If validation passes, submit the form
    form.submit();
});

// Validate email format
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validate password strength
function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
}

// Add event listener for input validation
const emailInput = document.querySelector('#emailInput');
emailInput.addEventListener('input', function() {
    const email = emailInput.value;
    if (!validateEmail(email)) {
        emailInput.setCustomValidity('Please enter a valid email address');
    } else {
        emailInput.setCustomValidity('');
    }
});

const passwordInput = document.querySelector('#passwordInput');
passwordInput.addEventListener('input', function() {
    const password = passwordInput.value;
    if (!validatePassword(password)) {
        passwordInput.setCustomValidity('Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one digit');
    } else {
        passwordInput.setCustomValidity('');
    }
});

