import React from 'react';
import ContactCard from './ContactCard';

function ContactList({ contacts, deleteContact, startEditing }) {
    return (
        <div>
            {contacts.map(contact => (
                <ContactCard
                    key={contact.id}
                    contact={contact}
                    deleteContact={deleteContact}
                    startEditing={startEditing}
                />
            ))}
        </div>
    );
}

export default ContactList;
