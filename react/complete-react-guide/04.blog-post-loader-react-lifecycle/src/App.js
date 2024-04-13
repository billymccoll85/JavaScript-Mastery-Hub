import React from 'react';
import DataFetcher from './components/DataFetcher'; // Adjust the path as necessary

function App() {
  return (
    <div className="App">
      {/* Container with Tailwind CSS */}
      <div className="container mx-auto px-4">
        <DataFetcher />
      </div>
    </div>
  );
}

export default App;
