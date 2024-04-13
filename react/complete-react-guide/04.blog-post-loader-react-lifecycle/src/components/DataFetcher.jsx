import React, { useState, useEffect } from 'react';
import PostList from './PostList';
import FilterInput from './FilterInput';

const DataFetcher = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setError(null);
        setIsLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPosts(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="container mx-auto p-4">
      <FilterInput filter={filter} setFilter={setFilter} />
      <PostList posts={filteredPosts} isLoading={isLoading} error={error} />
    </div>
  );
};

export default DataFetcher;
