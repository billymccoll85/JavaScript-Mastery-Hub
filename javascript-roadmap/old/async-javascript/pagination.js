// Function to fetch data from the JSONPlaceholder API
async function fetchData(pageNumber) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=10`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

// Function to display paginated data
async function displayData(pageNumber) {
    try {
        const data = await fetchData(pageNumber);
        // Display the data on the page
        console.log(data);
    } catch (error) {
        console.error('Error displaying data:', error);
    }
}

// Example usage
const currentPage = 1;
displayData(currentPage);
