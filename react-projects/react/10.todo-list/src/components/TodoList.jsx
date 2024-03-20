import React, { useState } from 'react';
import TodoItem from './TodoItem';

// TodoList component: Manages and displays a list of TodoItem components.
// Demonstrates the use of state in React with useState hook.
function TodoList() {
  // State: todos - an array of to-do items, each with id, name, and completed status.
  // useState hook initializes the state with an initial list of items.
  const [todos, setTodos] = useState([
    { id: 1, name: 'Learn React', completed: false },
    { id: 2, name: 'Build a React App', completed: false },
  ]);

  // toggleTodo function: Toggles the completion status of a to-do item.
  // It takes an item's id, updates the item's completed status, and sets the new state.
  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    // Renders a list of TodoItem components.
    // Maps over the todos state to create a TodoItem for each to-do item.
    // Passes each item's data and the toggleTodo function as props to TodoItem.
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} item={todo} onToggle={() => toggleTodo(todo.id)} />
      ))}
    </ul>
  );
}

export default TodoList;
