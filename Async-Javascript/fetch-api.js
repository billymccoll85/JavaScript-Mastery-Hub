// Function to fetch data from JSONPlaceholder API
function fetchData(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Display the response data
            console.log(data);
        })
        .catch(error => {
            // Handle any errors
            console.error('Error:', error);
        });
}

// Usage example
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
fetchData(apiUrl);
