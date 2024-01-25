import React from 'react';

/**
 * Renders a single todo item.
 * @param {Object} props - The component props.
 * @param {Object} props.todo - The todo object containing task and completed properties.
 * @param {Function} props.onToggleComplete - The function to toggle the completion status of the todo.
 * @param {Function} props.onDeleteTodo - The function to delete the todo.
 * @returns {JSX.Element} The rendered TodoItem component.
 */
function TodoItem({ todo, onToggleComplete, onDeleteTodo }) {
    // Renders a list item representing a single todo item.
    return (
        <li 
            className={`flex items-center justify-between my-2 p-2 border ${todo.completed ? 'bg-green-100' : 'bg-white'}`}
        >
            {/* Renders the task of the todo item. If the todo is completed, it applies a line-through style. */}
            <span className={`${todo.completed ? 'line-through' : ''}`}>
                {todo.task}
            </span>
            <div>
                {/* Renders a button to toggle the completion status of the todo item. */}
                <button 
                    onClick={() => onToggleComplete(todo.id)}
                    className="text-sm bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded-l-md mr-1"
                >
                    {todo.completed ? 'Undo' : 'Complete'}
                </button>
                {/* Renders a button to delete the todo item. */}
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
