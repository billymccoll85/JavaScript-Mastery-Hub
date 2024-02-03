import React, { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import DOMPurify from 'dompurify';



const DiaryEntryModal = ({ onSave, onClose, selectedDay, currentEntry }) => {
  const [entry, setEntry] = useState('');

  useEffect(() => {
    setEntry(currentEntry);
  }, [currentEntry, selectedDay]);

  const handleSave = () => {
    const sanitizedEntry = DOMPurify.sanitize(entry);
    onSave(selectedDay, sanitizedEntry);
    onClose();
  };

  const handleEditorChange = (content) => {
    setEntry(content);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center p-4">
      <div className="relative bg-white rounded-lg shadow-xl p-5 w-full max-w-2xl md:w-1/2 h-auto md:h-3/4" onClick={(e) => e.stopPropagation()}>
        <Editor
          apiKey='vjnfdlank203iph9jy0m9n7yixp6mtq0tjzpt55nlw7yq4s3'
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
