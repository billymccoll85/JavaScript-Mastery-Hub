import React, { Component } from 'react';
import PostItem from './PostItem';

class PostList extends Component {
  render() {
    const { posts, isLoading, error } = this.props;
    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div className="text-red-500">Error: {error}</div>;
    }
    return (
      <ul>
        {posts.map(post => <PostItem key={post.id} post={post} />)}
      </ul>
    );
  }
}

export default PostList;
