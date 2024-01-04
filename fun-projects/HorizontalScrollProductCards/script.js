// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the scrollRight button element
    const scrollRight = document.getElementById("scrollRight");
    // Get the product list container element
    const productListContainer = document.querySelector(".product-list-container");

    // Add a click event listener to the scrollRight button
    scrollRight.addEventListener("click", function() {
        // Scroll the product list container to the right by 620 pixels with smooth behavior
        productListContainer.scrollBy({
            top: 0, 
            left: 620, 
            behavior: 'smooth'
        });
    });
});
