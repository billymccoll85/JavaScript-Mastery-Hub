import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

function App() {
  // This is the root component of the application.

  return (
    <div className="App bg-gradient-to-r from-blue-500 to-purple-500">
      <header className="App-header">
        {/* Application title */}
        <h1 className="text-4xl font-bold text-black text-center pt-20">React Calculator</h1>
      </header>
      <main className='pb-20'>
        {/* Calculator component */}
        <Calculator />
      </main>
    </div>
  );
}

export default App;

/* 
   Advice for implementing App component:
   1. Root Component: The 'App' component is typically the root component of a React application. It serves as the starting point for rendering the entire app.

   2. Component Composition: The 'Calculator' component is composed within the 'App' component using JSX. This structure allows you to build complex applications by combining smaller, reusable components.

   3. Styling: CSS classes are applied to style the 'App' component and its elements. The use of 'bg-gradient-to-r' applies a gradient background from blue to purple.

   4. Header: A header section is added with a title ("React Calculator"). Clear and descriptive headings enhance the user experience.

   5. Main Content: The main content of the application, which includes the 'Calculator' component, is placed within the 'main' element. This helps with semantic HTML structure.

   6. Keep It Simple: The 'App' component's responsibility is to structure the layout and compose child components. It doesn't contain complex logic but serves as a container for other parts of the app.

   7. Styling Separation: Styles are kept in a separate CSS file ('App.css'), which is a good practice for maintaining clean and organized styles.

   8. Component Hierarchy: Understanding the hierarchy of components and their relationships is important when building React applications. The 'App' component often serves as the top-level component that orchestrates the rendering of other components.
*/
