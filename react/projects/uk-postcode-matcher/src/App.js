import React from 'react';
import PostcodeLookup from './components/PostcodeLookup';  // Make sure the path is correct based on your project structure

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <header className="bg-blue-800 text-white p-6 w-full">
        <h1 className="text-center text-3xl font-bold">UK Postcode Lookup</h1>
      </header>
      <PostcodeLookup />
    </div>
  );
}

export default App;
