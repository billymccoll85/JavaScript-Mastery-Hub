import React, { useState } from 'react';

const CreatePost = ({ onAddPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPost({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="block w-full p-2 border"
        placeholder="Title"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="block w-full p-2 border"
        placeholder="Content"
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white">Create Post</button>
    </form>
  );
};

export default CreatePost;
