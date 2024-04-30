import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import contactsData from './data/contacts.json';

function App() {
    const [contacts, setContacts] = useState([]);
    const [editingContact, setEditingContact] = useState(null);

    useEffect(() => {
        setContacts(contactsData);
    }, []);

    const addContact = (contact) => {
        contact.id = contacts.length + 1;
        setContacts([...contacts, contact]);
    };

    const updateContact = (id, updatedContact) => {
        setContacts(contacts.map(contact => contact.id === id ? updatedContact : contact));
    };

    const deleteContact = (id) => {
        setContacts(contacts.filter(contact => contact.id !== id));
    };

    const startEditing = (contact) => {
        setEditingContact(contact);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <ContactForm addContact={addContact} updateContact={updateContact} contactToEdit={editingContact} />
                </div>
                <div className="col-md-8">
                    <ContactList contacts={contacts} deleteContact={deleteContact} startEditing={startEditing} />
                </div>
            </div>
        </div>
    );
}

export default App;
