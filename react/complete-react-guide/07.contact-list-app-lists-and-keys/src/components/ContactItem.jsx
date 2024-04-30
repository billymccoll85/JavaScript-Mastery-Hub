import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function ContactItem({ contact }) {
    return (
        <div className="card mb-3 shadow-sm">
            <div className="card-body">
                <h5 className="card-title">{contact.name}</h5>
                <p className="card-text">
                    <FontAwesomeIcon icon={faPhone} className="me-2" />
                    {contact.phone}
                </p>
                <p className="card-text">
                    <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                    {contact.email} {/* Assuming you have email in your contact data */}
                </p>
            </div>
        </div>
    );
}

export default ContactItem;
