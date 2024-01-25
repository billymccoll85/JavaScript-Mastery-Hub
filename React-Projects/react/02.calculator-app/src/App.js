import React from 'react';
import './App.css'; // Assuming you have an App.css for global styles
import Calculator from './components/Calculator'; // Update the path as per your directory structure

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Calculator</h1>
      </header>
      <main>
        <Calculator />
      </main>
    </div>
  );
}

export default App;
