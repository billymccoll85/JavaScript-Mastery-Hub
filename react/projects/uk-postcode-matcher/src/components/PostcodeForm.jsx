// src/components/PostcodeForm.js

import React, { useState } from 'react';
import axios from 'axios';

const PostcodeForm = ({ onResults }) => {
  const [postcodes, setPostcodes] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setPostcodes(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const parsedPostcodes = parsePostcodes(postcodes);
      const areaNames = await fetchAreaNames(parsedPostcodes);
      onResults(areaNames);
      setError('');
    } catch (err) {
      setError('An error occurred. Please check your input and try again.');
    }
  };

  const parsePostcodes = (postcodes) => {
    return postcodes.split('\n').filter(postcode => postcode.trim() !== '');
  };

  const fetchAreaNames = async (postcodes) => {
    const areaNames = await Promise.all(postcodes.map(async (postcode) => {
      const response = await axios.get(`https://api.postcodes.io/postcodes/${postcode}`);
      return response.data.result?.admin_district || 'Area name not found';
    }));
    return areaNames;
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setPostcodes(reader.result);
    };
    reader.readAsText(file);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(postcodes);
  };

  const handleDownload = () => {
    const filename = 'matched_area_names.txt';
    const blob = new Blob([postcodes], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-4">
        <label className="block mb-2 font-bold text-gray-700">Upload Document or Paste Postcodes:</label>
        <div className="flex">
          <input type="file" accept=".txt" onChange={handleUpload} className="mr-2" />
          <textarea
            className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            rows="5"
            placeholder="Paste postcodes here..."
            value={postcodes}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Submit
        </button>
      </form>
      {error && <div className="text-red-500">{error}</div>}
      <div className="flex">
        <button onClick={handleCopy} className="mr-2 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
          Copy to Clipboard
        </button>
        <button onClick={handleDownload} className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
          Download
        </button>
      </div>
    </div>
  );
};

export default PostcodeForm;
