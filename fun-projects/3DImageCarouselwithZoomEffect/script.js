let currentSlide = 1;
let isPaused = false; // Variable to check if the slideshow is paused

// Function to change the slide
const changeSlide = () => {
  if (!isPaused) {
    // Remove 'can-zoom' class from all slides
    document.querySelectorAll('.zoom-container').forEach((container) => {
      container.classList.remove('can-zoom');
    });

    // Set the active slide
    const activeSlide = document.getElementById(`s${currentSlide}`);
    activeSlide.checked = true;

    // Add 'can-zoom' class to the active slide
    const activeContainer = document.querySelector(`.zoom-container[data-slide="${currentSlide}"]`);
    if (activeContainer) {
      activeContainer.classList.add('can-zoom');
    }

    // Move to the next slide
    currentSlide++;
    if (currentSlide > 5) {
      currentSlide = 1;
    }
  }
};

// Start the auto-scroll
let slideInterval = setInterval(changeSlide, 5000);

// Function to pause the auto-scroll
const pauseSlide = () => {
  isPaused = true;
};

// Function to resume the auto-scroll
const resumeSlide = () => {
  isPaused = false;
};

// Adding event listeners to pause and resume auto-scroll on hover
document.querySelectorAll('.zoom-container').forEach((container) => {
  container.addEventListener('mouseover', () => {
    if (!container.classList.contains('can-zoom')) {
      return;
    }
    pauseSlide();
  });
  container.addEventListener('mouseout', () => {
    resumeSlide();
  });
});
