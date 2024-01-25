// App.js
import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos([...todos, { id: Date.now(), task, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="container mx-auto p-4 w-1/2">
      <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>
      <AddTodo onAddTodo={addTodo} />
      <TodoList 
        todos={todos} 
        onToggleComplete={toggleComplete} 
        onDeleteTodo={deleteTodo} 
      />
    </div>
  );
}

export default App;
