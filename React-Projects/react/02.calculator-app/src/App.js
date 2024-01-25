import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App bg-gradient-to-r from-blue-500 to-purple-500">
      <header className="App-header">
        <h1 className="text-4xl font-bold text-black text-center pt-20">React Calculator</h1>
      </header>
      <main className='pb-20'>
        <Calculator />
      </main>
    </div>
  );
}

export default App;
