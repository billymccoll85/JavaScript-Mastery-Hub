import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts }) => {
  // Function to strip HTML tags
  const stripHtml = (html) => {
    if (!html) return '';
    let tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map(post => (
        <div key={post.id} className="card bg-white p-4 shadow-md rounded">
          <h2 className="text-xl font-bold mb-2">{post.title}</h2>
          <p>{stripHtml(post.content).substring(0, 100)}...</p>
          <Link to={`/post/${post.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block">
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
