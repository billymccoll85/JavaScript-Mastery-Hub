import React from 'react';

const PostList = ({ posts, onDeletePost }) => (
  <div>
    {posts.map(post => (
      <div key={post.id} className="border-b">
        <h3 className="text-xl font-bold">{post.title}</h3>
        <p>{post.content}</p>
        <button onClick={() => onDeletePost(post.id)} className="px-4 py-2 bg-red-500 text-white">Delete</button>
      </div>
    ))}
  </div>
);

export default PostList;
