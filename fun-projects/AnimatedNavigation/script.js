const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    close.style.display = 'block';
    hamburger.style.display = 'none';
});

close.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    close.style.display = 'none';
    hamburger.style.display = 'block';
});