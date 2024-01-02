// Async function using await and Fetch API
async function getData() {
    try {
        // Send a GET request to the JSONPlaceholder API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        // Parse the response as JSON
        const data = await response.json();

        // Log the retrieved data to the console
        console.log(data);
    } catch (error) {
        // Log any errors that occur during the process
        console.log('Error:', error);
    }
}

// Call the async function to fetch and log the data
getData();
