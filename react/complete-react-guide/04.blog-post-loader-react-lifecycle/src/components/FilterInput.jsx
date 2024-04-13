import React from 'react';

const FilterInput = ({ filter, setFilter }) => {
  return (
    <input
      type="text"
      placeholder="Filter posts..."
      value={filter}
      onChange={e => setFilter(e.target.value)}
      className="mb-4 p-2 border rounded"
    />
  );
};

export default FilterInput;
