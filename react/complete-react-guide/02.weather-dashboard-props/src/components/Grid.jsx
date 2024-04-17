import React from 'react';

/**
 * Grid Component
 * Provides a responsive grid layout for child components, adjusting column count based on screen size.
 *
 * @param {React.ReactNode} children - The child components or elements to be rendered within the grid.
 */
const Grid = ({ children }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {children}
    </div>
  );
};

export default Grid;
