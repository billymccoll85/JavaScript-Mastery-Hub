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

/* 
   Advice for a beginner:
   1. Component Modularity: This code demonstrates how to create a modular React component for rendering a single todo item. Modularity helps keep your code organized and maintainable.
   
   2. Props Usage: Pay close attention to how props (todo, onToggleComplete, onDeleteTodo) are used within the component. Props are a way to pass data and functions into components, enabling reusability.
   
   3. Conditional Rendering: Observe how the className and the use of the todo.completed property are used for conditional rendering to style completed and incomplete todo items differently. This is a common pattern in React.
   
   4. Event Handling: The onClick event handlers are used to handle user interactions. In this case, they trigger the onToggleComplete and onDeleteTodo functions when the respective buttons are clicked.
   
   5. Styling: The code includes inline styling for buttons. However, for larger projects, consider using CSS files or a CSS-in-JS solution for better maintainability and separation of concerns.
   
   6. Component Reusability: This TodoItem component can be reused for each item in a todo list. Understanding how to create reusable components is fundamental in React development.
   
   7. Practice and Experiment: As a beginner, don't hesitate to experiment with small projects and gradually build your understanding of React concepts. Reading and modifying code examples like this one can be a valuable learning experience.
*/
