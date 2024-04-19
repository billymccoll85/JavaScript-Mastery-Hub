import React from 'react';
import PostcodeForm from './components/PostcodeForm';
import ResultList from './components/ResultList';

function App() {
  // Dummy data for testing
  const results = ['Area Name 1', 'Area Name 2', 'Area Name 3'];

  const handleSubmit = (postcodes) => {
    // Handle submit logic here (e.g., make API request)
    console.log('Submitted postcodes:', postcodes);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">UK Postcode Matcher</h1>
      <PostcodeForm onSubmit={handleSubmit} />
      <ResultList results={results} />
    </div>
  );
}

export default App;
