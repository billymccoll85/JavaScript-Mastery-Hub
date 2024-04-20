import React from 'react';
import PostcodeLookup from './components/PostcodeLookup';  // Make sure the path is correct based on your project structure

function App() {
  return (
    <div className="h-lvh flex flex-col bg-slate-900 text-white">
      <header className="bg-slate-900 text-sky-400 p-6 w-full border-b-2 border-sky-400">
        <h1 className="text-center text-3xl font-bold">UK Postcode Lookup</h1>
      </header>
      <div className="flex justify-center"> {/* This div takes the remaining height */}
        <PostcodeLookup />
      </div>
    </div>
  );
}

export default App;
