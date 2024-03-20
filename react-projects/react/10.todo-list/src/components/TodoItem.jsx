import React from 'react';

// TodoItem component definition.
// This component is responsible for displaying an individual to-do item.
// It receives two props: 'item' and 'onToggle'.
// 'item' is an object representing a to-do item, which contains the name and completion status.
// 'onToggle' is a function passed down from the TodoList component that toggles the completion status of the item.
function TodoItem({ item, onToggle }) {
  return (
    // List item element that displays the to-do item.
    // Applies conditional styling based on the item's completion status.
    // When clicked, it calls the onToggle function to toggle the completion status of the item.
    <li
      className={`cursor-pointer ${item.completed ? 'text-gray-500 line-through' : 'text-black'}`}
      onClick={onToggle}
    >
      {item.name}
    </li>
  );
}

export default TodoItem;
