// src/components/NoteItem.js
import React, { useState } from 'react';

function NoteItem({ note, deleteNote, updateNote }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(note.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateNote(note.id, editedText);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between p-3 mb-2 bg-white shadow-lg rounded-lg">
      {isEditing ? (
        <textarea
          className="flex-1 mr-3 text-gray-700 border rounded-lg focus:outline-none"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        ></textarea>
      ) : (
        <span className="flex-1">{note.text}</span>
      )}

      <div className="flex space-x-2">
        {isEditing ? (
          <button onClick={handleSave} className="px-2 py-1 text-white bg-green-500 rounded">
            Save
          </button>
        ) : (
          <>
            <button onClick={handleEdit} className="px-2 py-1 text-white bg-blue-500 rounded">
              Edit
            </button>
            <button onClick={() => deleteNote(note.id)} className="px-2 py-1 text-white bg-red-500 rounded">
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default NoteItem;
