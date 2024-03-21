import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

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
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-4">
      <div className="mb-4">
        <label htmlFor="postTitle" className="block text-gray-700 text-sm font-bold mb-2">
          Title
        </label>
        <input 
          type="text" 
          id="postTitle"
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Enter the title here"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="my-8">
        <label htmlFor="postContent" className="block text-gray-700 text-sm font-bold mb-2">
          Content
        </label>
        <Editor
          value={content}
          init={{
            height: 500,
            menubar: false,
            // ... other TinyMCE configurations
          }}
          onEditorChange={(newContent) => setContent(newContent)}
        />
      </div>

      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Create Post
      </button>
    </form>
  );
}

export default CreatePost;
