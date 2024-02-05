import React, { useState } from 'react';

function NoteItem({ note, deleteNote, updateNote }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState(note.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateNote(note.id, { ...note, text: editedNote });
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between p-4 m-2 border-b border-gray-200">
      {isEditing ? (
        <textarea
          className="flex-1 mr-4 p-2 border border-gray-200 rounded shadow"
          value={editedNote}
          onChange={(e) => setEditedNote(e.target.value)}
        />
      ) : (
        <p className="flex-1">{note.text}</p>
      )}
      <button onClick={() => deleteNote(note.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
        Delete
      </button>
      {isEditing ? (
        <button onClick={handleSave} className="ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
          Save
        </button>
      ) : (
        <button onClick={handleEdit} className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
          Edit
        </button>
      )}
    </div>
  );
}

export default NoteItem;
