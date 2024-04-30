import React, { useState } from 'react'; // Import useState here
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ContactCard({ contact, deleteContact, startEditing }) {
    const [show, setShow] = useState(false); // Now useState is defined

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this contact?")) {
            deleteContact(contact.id);
            handleClose();
        }
    };

    return (
        <>
            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">{contact.name}</h5>
                    <p className="card-text">{contact.email}</p>
                    <p className="card-text">{contact.phone}</p>
                    <button onClick={() => startEditing(contact)} className="btn btn-warning me-2">
                        <FontAwesomeIcon icon={faEdit} /> Edit
                    </button>
                    <button onClick={handleShow} className="btn btn-danger">
                        <FontAwesomeIcon icon={faTrash} /> Delete
                    </button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this contact?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ContactCard;
