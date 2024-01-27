import React from 'react';

const PostDetail = ({ post }) => (
  <div>
    <h2 className="text-2xl font-bold">{post.title}</h2>
    <p>{post.content}</p>
  </div>
);

export default PostDetail;
