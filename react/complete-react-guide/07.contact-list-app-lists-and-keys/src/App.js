import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import custom styles for the app
import ContactList from './components/ContactList';

function App() {
    return (
        <div className="container">
            <ContactList />
        </div>
    );
}

export default App;
