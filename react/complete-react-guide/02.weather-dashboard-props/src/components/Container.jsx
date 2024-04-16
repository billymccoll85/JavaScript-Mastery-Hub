import React from 'react';

/**
 * Container Component
 * Wraps children with a max-width and centers them, applying responsive padding.
 *
 * Props:
 * - children The child components or elements to be rendered inside the container.
 */
const Container = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
};

export default Container;
