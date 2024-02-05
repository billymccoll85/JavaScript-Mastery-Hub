// src/App.js
import React, { useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const updateNote = (id, updatedText) => {
    setNotes(notes.map(note => note.id === id ? { ...note, text: updatedText } : note));
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-xl font-semibold text-center my-5">Note Taking App</h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} updateNote={updateNote} />
    </div>
  );
}

export default App;
