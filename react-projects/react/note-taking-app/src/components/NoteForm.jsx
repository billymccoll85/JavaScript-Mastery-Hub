import React, { useState } from 'react';

function NoteForm({ addNote }) {
  const [noteText, setNoteText] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!noteText.trim()) return; // Avoid adding empty notes
    const newNote = {
      id: Date.now(),
      text: noteText.trim(),
      category // Add category to the note model
    };
    addNote(newNote);
    setNoteText(''); // Reset the note text field
    setCategory(''); // Reset the category field
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto my-8">
      <textarea
        className="w-full p-2 mb-4 border border-gray-200 rounded shadow-sm"
        placeholder="Write your note here..."
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      ></textarea>
      <select
        className="w-full p-2 mb-4 border border-gray-200 rounded shadow-sm"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        <option value="personal">Personal</option>
        <option value="work">Work</option>
        <option value="other">Other</option>
      </select>
      <button
        type="submit"
        className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Add Note
      </button>
    </form>
  );
}

export default NoteForm;
