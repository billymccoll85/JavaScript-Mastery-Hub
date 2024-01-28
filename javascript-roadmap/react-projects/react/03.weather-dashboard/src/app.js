import React from 'react';
import { CityProvider } from './context/CityContext';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <CityProvider>
      <div className="App">
        <Dashboard />
      </div>
    </CityProvider>
  );
}

export default App;
