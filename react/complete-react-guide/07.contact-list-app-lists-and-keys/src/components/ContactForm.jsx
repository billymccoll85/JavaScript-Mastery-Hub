import React, { useState, useEffect } from 'react';

function ContactForm({ addContact, updateContact, contactToEdit }) {
    const [contact, setContact] = useState({ name: '', email: '', phone: '' });

    useEffect(() => {
        if (contactToEdit) setContact(contactToEdit);
    }, [contactToEdit]);

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (contact.id) {
            updateContact(contact.id, contact);
        } else {
            addContact(contact);
        }
        setContact({ name: '', email: '', phone: '' }); // Reset form
    };

    return (
        <div className="card p-3">
             <form onSubmit={handleSubmit} className="mb-3">
                <div className="form-group mb-3">
                    <label>Name</label>
                    <input type="text" className="form-control" name="name" value={contact.name} onChange={handleChange} required />
                </div>
                <div className="form-group mb-3">
                    <label>Email</label>
                    <input type="email" className="form-control" name="email" value={contact.email} onChange={handleChange} required />
                </div>
                <div className="form-group mb-3">
                    <label>Phone</label>
                    <input type="text" className="form-control" name="phone" value={contact.phone} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">{contact.id ? 'Update' : 'Add'} Contact</button>
            </form>
        </div>
    );
}

export default ContactForm;
