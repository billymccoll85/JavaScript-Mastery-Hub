import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos([...todos, { id: Date.now(), task, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="container mx-auto p-4 w-1/2">
      <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>
      <AddTodo onAddTodo={addTodo} />
      <TodoList 
        todos={todos} 
        onToggleComplete={toggleComplete} 
        onDeleteTodo={deleteTodo} 
      />
    </div>
  );
}

export default App;

/* 
   Advice for a beginner:
   1. State Management: The 'useState' hook is used to manage the 'todos' state, which represents the list of todo items. State is crucial for storing and updating data within a React component.

   2. Adding Todo Items: The 'addTodo' function is called when a new task is added. It uses the 'setTodos' function to update the state with a new todo item. Notice how the 'id' is generated using 'Date.now()' to ensure uniqueness.

   3. Toggling Completion: The 'toggleComplete' function is used to toggle the completion status of a todo item. It maps over the 'todos' array, updates the relevant item, and sets the state with the modified array.

   4. Deleting Todo Items: The 'deleteTodo' function removes a todo item by filtering the 'todos' array based on the 'id' of the item to be deleted.

   5. Component Composition: 'AddTodo' and 'TodoList' components are composed within the 'App' component. This demonstrates how to create a structured React application by combining smaller, reusable components.

   6. Styling: Styling is applied using utility classes. For larger projects, consider using a CSS framework or CSS-in-JS solution for more organized and scalable styles.

   7. Practice and Experiment: Building a simple todo list application like this is a great way for beginners to gain hands-on experience with React. Experiment with adding more features or improving the user interface as you become more comfortable with React.
*/
