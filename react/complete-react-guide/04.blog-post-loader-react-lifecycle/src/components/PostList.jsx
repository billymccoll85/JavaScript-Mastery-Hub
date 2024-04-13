import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, isLoading, error }) => {
  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <ul>
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default PostList;
