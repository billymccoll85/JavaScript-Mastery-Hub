async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);
        // Render the data here
        renderData(data);
    } catch (error) {
        console.log('Error:', error);
    }
}

function renderData(data) {
    // Code to render the data goes here
    // For example, you can loop through the data and create HTML elements dynamically
    data.forEach((item) => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `
            <h2>${item.title}</h2>
            <p>${item.body}</p>
        `;
        document.body.appendChild(postElement);
    });
}

fetchData();
