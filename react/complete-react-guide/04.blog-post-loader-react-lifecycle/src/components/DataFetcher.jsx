import React, { Component } from 'react';
import PostList from './PostList';
import FilterInput from './FilterInput';

class DataFetcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoading: true,
      error: null,
      filter: ''
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => this.setState({ posts: data, isLoading: false }))
      .catch(error => this.setState({ error: error.message, isLoading: false }));
  }

  handleFilterChange = (filterValue) => {
    this.setState({ filter: filterValue });
  }

  render() {
    const { posts, isLoading, error, filter } = this.state;
    const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(filter.toLowerCase()));

    return (
      <div className="container mx-auto p-4">
        <FilterInput filter={this.state.filter} onFilterChange={this.handleFilterChange} />
        <PostList posts={filteredPosts} isLoading={isLoading} error={error} />
      </div>
    );
  }
}

export default DataFetcher;
