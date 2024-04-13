import React from 'react';

const PostItem = ({ post }) => {
  return (
    <li className="list-none p-2 hover:bg-gray-100">
      <h3 className="font-bold">{post.title}</h3>
      <p>{post.body}</p>
    </li>
  );
};

export default PostItem;
