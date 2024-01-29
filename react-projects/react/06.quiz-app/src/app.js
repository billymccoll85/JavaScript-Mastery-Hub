import React from 'react';
import './App.css';
import { QuizProvider } from './context/QuizContext';
import QuizContainer from './components/QuizContainer';

function App() {
  return (
    <QuizProvider>
      <div className="App">
        <header className="App-header">
          {/* Your quiz container or any other components */}
          <QuizContainer />
        </header>
      </div>
    </QuizProvider>
  );
}

export default App;
