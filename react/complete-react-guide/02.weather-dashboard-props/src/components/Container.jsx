import React from 'react';

/**
 * Container Component
 * Wraps children with a max-width and centers them, applying responsive padding.
 *
 * @param {React.ReactNode} children - The child components to be rendered inside the container.
 */
const Container = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto my-12 px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
};

export default Container;
