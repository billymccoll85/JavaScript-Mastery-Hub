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
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="border border-gray-300 p-2 rounded-l-md"
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
