import React, { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react'; // Import the Editor component

const DiaryEntryModal = ({ onSave, onClose, selectedDay, currentEntry }) => {
  const [entry, setEntry] = useState('');

  useEffect(() => {
    setEntry(currentEntry);
  }, [currentEntry, selectedDay]);

  const handleSave = () => {
    // onSave now needs to handle the rich text content from TinyMCE
    onSave(selectedDay, entry);
    onClose(); // Close the modal
  };

  const handleEditorChange = (content, editor) => {
    setEntry(content);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center p-4">
      <div className="relative bg-white rounded-lg shadow-xl p-5 w-full max-w-2xl md:w-1/2 h-auto md:h-3/4" onClick={(e) => e.stopPropagation()}>
        <Editor
          initialValue={entry}
          init={{
            height: 500,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount'
            ],
            toolbar: 'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help'
          }}
          onEditorChange={handleEditorChange}
        />
        <div className="mt-4 flex justify-between space-x-3">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded" onClick={handleSave}>Save</button>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DiaryEntryModal;
