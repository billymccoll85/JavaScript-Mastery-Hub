import React from 'react';

// TodoItem component: Displays a single to-do item.
// Props:
// - item: An object representing a to-do item (contains id, name, and completed status).
// - onToggle: A function passed from the TodoList component to handle the click event (toggling the completion status).
function TodoItem({ item, onToggle }) {
  return (
    // ListItem with conditional styling based on the completion status.
    // Uses Tailwind CSS for styling.
    // onClick event triggers the onToggle function, changing the item's completion status.
    <li
      className={`cursor-pointer ${item.completed ? 'text-gray-500 line-through' : 'text-black'}`}
      onClick={onToggle}
    >
      {item.name}
    </li>
  );
}

export default TodoItem;
