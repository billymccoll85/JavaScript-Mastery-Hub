function startTimer(duration) {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
}

async function fetchData() {
    console.log("Fetching data from JSONPlaceholder API...");

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log("Data fetched successfully:", data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

startTimer(5000) // Example usage: start a timer for 5 seconds
    .then(() => fetchData());