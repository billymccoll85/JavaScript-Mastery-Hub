// Get references to the HTML elements
const sliderContainer = document.querySelector('.slider-container');
const sliderImages = document.querySelectorAll('.slider-image');

// Set initial slide index
let currentSlide = 0;

// Function to show the current slide
function showSlide() {
    // Hide all slides
    sliderImages.forEach((image) => {
        image.style.display = 'none';
    });

    // Show the current slide
    sliderImages[currentSlide].style.display = 'block';
}

// Function to move to the next slide
function nextSlide() {
    currentSlide++;
    if (currentSlide >= sliderImages.length) {
        currentSlide = 0;
    }
    showSlide();
}

// Function to move to the previous slide
function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = sliderImages.length - 1;
    }
    showSlide();
}

// Event listeners for next and previous buttons
document.querySelector('.next-btn').addEventListener('click', nextSlide);
document.querySelector('.prev-btn').addEventListener('click', prevSlide);

// Show the initial slide
showSlide();
