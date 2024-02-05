// src/components/SearchBar.js
import React from 'react';

function SearchBar({ setSearchQuery }) {
  return (
    <input
      type="text"
      placeholder="Search notes..."
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full p-2 mb-4 border border-gray-300 rounded shadow-sm"
    />
  );
}

export default SearchBar;
