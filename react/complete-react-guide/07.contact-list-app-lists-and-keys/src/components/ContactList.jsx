import React, { useState, useEffect } from 'react';
import ContactItem from './ContactItem';

function ContactList() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchedContacts = [
            { id: 1, name: 'John Doe', phone: '123-456-7890', email: 'john@example.com' },
            { id: 2, name: 'Jane Smith', phone: '234-567-8901', email: 'jane@example.com' }
        ];
        setContacts(fetchedContacts);
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="mb-3">Contacts</h2>
            {contacts.map(contact => (
                <ContactItem key={contact.id} contact={contact} />
            ))}
        </div>
    );
}

export default ContactList;
