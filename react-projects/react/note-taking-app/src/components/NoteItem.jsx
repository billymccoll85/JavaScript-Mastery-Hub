import React, { useState } from 'react';

function NoteItem({ note, deleteNote, updateNote }) {
  const [editMode, setEditMode] = useState(false);
  const [editedText, setEditedText] = useState(note.text);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    updateNote(note.id, { ...note, text: editedText });
    setEditMode(false);
  };

  return (
    <div className="flex flex-col p-4 m-2 bg-white rounded-lg shadow-md">
      {editMode ? (
        <textarea
          className="p-2 mb-4 border border-gray-200 rounded shadow-sm"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        ></textarea>
      ) : (
        <span className="mb-4">{note.text}</span>
      )}
      <div className="flex justify-end space-x-2">
        {editMode ? (
          <button
            onClick={handleSave}
            className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
          >
            Save
          </button>
        ) : (
          <>
            <button
              onClick={handleEdit}
              className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Edit
            </button>
            <button
              onClick={() => deleteNote(note.id)}
              className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default NoteItem;
