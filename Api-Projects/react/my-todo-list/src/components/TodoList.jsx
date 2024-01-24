import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onToggleComplete, onDeleteTodo }) {
  return (
    <ul className="list-none">
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onToggleComplete={onToggleComplete} 
          onDeleteTodo={onDeleteTodo} 
        />
      ))}
    </ul>
  );
}

export default TodoList;
