// src/components/NoteForm.js
import React, { useState } from 'react';

function NoteForm({ addNote }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    addNote({ id: Date.now(), text });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <textarea
        className="w-full p-2 text-gray-700 border rounded-lg focus:outline-none"
        rows="3"
        placeholder="Enter your note here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button type="submit" className="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded-lg">
        Add Note
      </button>
    </form>
  );
}

export default NoteForm;
