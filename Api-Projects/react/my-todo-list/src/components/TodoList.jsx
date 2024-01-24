import React from 'react';
import TodoItem from './TodoItem';

/**
 * Renders a list of todo items.
 * 
 * @param {Object[]} todos - The array of todo items.
 * @param {function} onToggleComplete - The function to toggle the completion status of a todo item.
 * @param {function} onDeleteTodo - The function to delete a todo item.
 * @returns {JSX.Element} The rendered TodoList component.
 */
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
