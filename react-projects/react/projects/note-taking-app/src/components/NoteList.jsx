// src/components/NoteList.js
import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, deleteNote, updateNote }) {
  return (
    <div>
      {notes.map(note => (
        <NoteItem key={note.id} note={note} deleteNote={deleteNote} updateNote={updateNote} />
      ))}
    </div>
  );
}

export default NoteList;
