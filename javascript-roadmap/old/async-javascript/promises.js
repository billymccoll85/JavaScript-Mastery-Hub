// Defining a function that returns a promise
const fetchData = () => {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous operation
        setTimeout(() => {
            const data = { message: "Data fetched successfully" };
            resolve(data); // Resolving the promise with the fetched data
        }, 2000);
    });
};

// Using the fetchData function and handling the promise
fetchData()
    .then((data) => {
        console.log(data); // Logging the fetched data when the promise is resolved
    })
    .catch((error) => {
        console.error(error); // Logging any errors that occur during the promise execution
    });
