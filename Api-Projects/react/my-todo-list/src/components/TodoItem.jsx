import React from 'react';

function TodoItem({ todo, onToggleComplete, onDeleteTodo }) {
  return (
    <li 
      className={`flex items-center justify-between my-2 p-2 border ${todo.completed ? 'bg-green-100' : 'bg-white'}`}
    >
      <span className={`${todo.completed ? 'line-through' : ''}`}>
        {todo.task}
      </span>
      <div>
        <button 
          onClick={() => onToggleComplete(todo.id)}
          className="text-sm bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded-l-md mr-1"
        >
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button 
          onClick={() => onDeleteTodo(todo.id)}
          className="text-sm bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded-r-md"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
