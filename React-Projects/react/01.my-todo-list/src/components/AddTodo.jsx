import React, { useState } from 'react';

/**
 * AddTodo component allows users to add new tasks to the todo list.
 * @param {Object} props - The component props.
 * @param {Function} props.onAddTodo - The function to be called when a new task is added.
 * @returns {JSX.Element} The AddTodo component.
 */
function AddTodo({ onAddTodo }) {
    const [task, setTask] = useState('');

    /**
     * Handles the form submission and adds a new task to the todo list.
     * @param {Event} e - The form submission event.
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() === '') return;
        onAddTodo(task);
        setTask('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4 flex justify-center">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="border border-gray-300 p-2 rounded-l-md w-96"
                placeholder="Add a new task"
            />
            <button 
                type="submit" 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md"
            >
                Add
            </button>
        </form>
    );
}

export default AddTodo;

/* 
   Advice for a beginner:
   1. State Management: Notice how the 'useState' hook is used to manage the 'task' state, which represents the input field value. State allows components to keep track of data that can change over time.

   2. Form Handling: The 'handleSubmit' function handles the form submission. It prevents the default form behavior, checks if the 'task' is not empty, and then calls 'onAddTodo' to add the new task to the todo list.

   3. Controlled Input: The 'input' element is a controlled input, meaning its value is controlled by the 'task' state. When the input value changes, it updates the state, and vice versa.

   4. Event Handling: The 'onChange' event handler is used to capture changes in the input field. Understanding how to handle events in React is crucial for building interactive components.

   5. Reusable Component: 'AddTodo' is a reusable component that can be used to add tasks in various parts of your application. Reusability is a core concept in React development.

   6. Styling: Inline styles and CSS classes are used for styling. For larger projects, consider using CSS files or a CSS-in-JS solution for better organization.

   7. Practice and Experiment: As a beginner, practice building components like 'AddTodo' to gain confidence and understanding of React's core concepts.
*/
