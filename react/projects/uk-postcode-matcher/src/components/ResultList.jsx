// src/components/ResultList.js

import React from 'react';

const ResultList = ({ results }) => {
  const handleCopy = () => {
    const formattedResults = results.join('\n');
    navigator.clipboard.writeText(formattedResults);
  };

  const handleDownload = () => {
    const filename = 'matched_area_names.txt';
    const formattedResults = results.join('\n');
    const blob = new Blob([formattedResults], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mt-4">
      <h2 className="font-bold text-lg mb-2">Matched Area Names:</h2>
      <ul>
        {results.map((result, index) => (
          <li key={index} className="mb-1">{result}</li>
        ))}
      </ul>
      <div className="flex mt-2">
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

export default ResultList;
