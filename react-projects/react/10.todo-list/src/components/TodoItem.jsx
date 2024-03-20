import React from 'react'

function TodoItem({ item, onToggle }) {
    return (
        <>
            <li className={`cursor-pointer ${item.completed ? 'text-gray-500 line-through' : 'text-black'}`} 
                onClick={onToggle}>
                {item.name}
            </li>
        </>
    )
}

export default TodoItem