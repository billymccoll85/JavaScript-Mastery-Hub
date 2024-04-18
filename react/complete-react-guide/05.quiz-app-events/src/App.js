import React from 'react';
import QuizContainer from './components/QuizContainer'; // Ensure the path matches your file structure
import './App.css'; // Assuming you have some global styles defined

const App = () => {
  return (
    <div className="App">
      <main>
        <QuizContainer />
      </main>
    </div>
  );
}

export default App;
