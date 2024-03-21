import React, { useState } from 'react';
import TodoItem from './TodoItem';

// TodoList component definition.
// This component manages the list of to-do items and renders TodoItem components for each item.
function TodoList() {
  // State 'todos' is an array of to-do item objects.
  // Each item object has an 'id', 'name', and 'completed' status.
  // 'setTodos' is the function to update the state.
  const [todos, setTodos] = useState([
    { id: 1, name: 'Learn React', completed: false },
    { id: 2, name: 'Build a React App', completed: false },
  ]);

  // 'toggleTodo' is a function that takes an 'id' of a to-do item.
  // It updates the 'todos' state by toggling the 'completed' status of the item with the matching 'id'.
  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    // Unordered list element that contains all to-do items.
    <ul>
      {/* Mapping over the 'todos' state array to render a TodoItem component for each item.
          'key' prop is required by React for efficient re-rendering.
          'item' prop passes the to-do item object to the TodoItem component.
          'onToggle' prop passes the 'toggleTodo' function to the TodoItem component, allowing it to toggle the completion status of the item. */}
      {todos.map(todo => (
        <TodoItem key={todo.id} item={todo} onToggle={() => toggleTodo(todo.id)} />
      ))}
    </ul>
  );
}

export default TodoList;
