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
        // We render an unordered list to display the todo items.
        <ul className="list-none">
            {/* We map over the 'todos' array to create a 'TodoItem' component for each todo item. */}
            {todos.map(todo => (
                <TodoItem 
                    key={todo.id} // Each 'TodoItem' component needs a unique key to help React efficiently update the list.
                    todo={todo} // We pass the 'todo' object as a prop to 'TodoItem' component.
                    onToggleComplete={onToggleComplete} // We pass the 'onToggleComplete' function as a prop to handle toggling completion status.
                    onDeleteTodo={onDeleteTodo} // We pass the 'onDeleteTodo' function as a prop to handle deleting a todo item.
                />
            ))}
        </ul>
    );
}

export default TodoList;

/* 
   Advice for a beginner:
   1. Component Composition: This code demonstrates how to compose a list of todo items using the 'TodoItem' component. Component composition is a fundamental concept in React, allowing you to build complex interfaces from smaller, reusable components.

   2. Mapping over Data: Observe how the 'todos' array is mapped using the 'map' function to create individual 'TodoItem' components for each todo item. This is a common pattern for rendering dynamic lists in React.

   3. Keys for Efficiency: Each 'TodoItem' component receives a 'key' prop with a unique value ('todo.id'). This helps React efficiently update and re-render the list when changes occur, improving performance.

   4. Prop Passing: Props like 'todo', 'onToggleComplete', and 'onDeleteTodo' are passed down to child components ('TodoItem') to enable communication between parent and child components. Understanding how props work is crucial in React development.

   5. Reusable Components: 'TodoList' and 'TodoItem' are reusable components that can be used in different parts of your application. Reusability promotes maintainability and code organization.

   6. Component Hierarchy: In larger applications, you may have multiple levels of component hierarchy. Understanding the hierarchy and the flow of data through props is important for building complex React applications.

   7. Practice and Experiment: As a beginner, practice is key to mastering React. Start with small projects and gradually work on more complex ones to build your skills and confidence.

   8. Follow Modern Practices: When learning React, it's essential to keep up with modern practices and libraries in the React ecosystem. Explore the latest React features and best practices to stay current.
*/
