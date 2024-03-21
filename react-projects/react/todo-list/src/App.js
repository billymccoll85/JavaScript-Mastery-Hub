import React from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="App container mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>
      <TodoList />
    </div>
  );
}

export default App;
