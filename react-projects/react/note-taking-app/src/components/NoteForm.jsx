import React, { useState } from 'react';

function NoteForm({ addNote }) {
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.trim()) return;
    addNote({ id: Date.now(), text: note.trim() });
    setNote('');
  };

  return (
    <form onSubmit={handleSubmit} className="m-4">
      <textarea
        className="w-full p-2 border border-gray-200 rounded shadow"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your note here..."
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
        Add Note
      </button>
    </form>
  );
}

export default NoteForm;
