import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 mb-8">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Simple Blog</h1>
        <nav>
          <Link to="/" className="mr-4 hover:text-blue-300">Home</Link>
          <Link to="/create" className="hover:text-blue-300">Create Post</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
