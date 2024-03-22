import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  // The useState hook is used to create a piece of state for the component.
  // Here, we create 'posts' state to store the posts fetched from the API,
  // and 'isLoading' state to track the loading status of the data fetching process.
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // The useEffect hook allows you to perform side effects in your component.
  // In this case, it's used for data fetching. useEffect takes a function as its first parameter,
  // which will run after the first render and after every update by default.
  // However, by providing an empty array as a second argument, we tell React to only run this effect once,
  // mimicking the behavior of componentDidMount in class components.
  useEffect(() => {
    // This is an asynchronous function declared within useEffect.
    // It's responsible for fetching data from the API.
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      
      // Once the data is fetched, we update the 'posts' state with the first 10 posts
      // and set 'isLoading' to false as the data fetching is complete.
      setPosts(data.slice(0, 10)); // Limiting to the first 10 posts for simplicity
      setIsLoading(false);
    };

    // Calling the fetchPosts function to initiate the data fetching process.
    fetchPosts();
  }, []); // The empty dependency array [] ensures this effect runs only once after the component mounts.

  return (
    <div>
      {/* Conditional rendering based on 'isLoading' state.
          If 'isLoading' is true, display a loading message.
          Otherwise, render the list of posts. */}
      {isLoading ? (
        <p>Loading posts...</p>
      ) : (
        <ul>
          {/* Mapping over the 'posts' state to render each post.
              Each post is displayed in a list item with its title and body. */}
          {posts.map(post => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataFetcher;
