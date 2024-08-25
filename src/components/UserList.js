import React, { useState } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserList = ({ onDeleteUser, users }) => {
    const [show, setShow] = useState(false);
    const [userIdToDelete, setUserIdToDelete] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = (userId) => {
        setUserIdToDelete(userId);
        setShow(true);
    };

    const handleDelete = () => {
        if (userIdToDelete !== null) {
            onDeleteUser(userIdToDelete);
        }
        setShow(false);
    };

    return (
        <>
            <ListGroup>
                {users.sort((a, b) => {
                    if (a.firstName > b.firstName) {
                        return 1;
                    } else if (a.firstName < b.firstName) {
                        return -1;
                    } else if (a.lastName > b.lastName) {
                        return 1;
                    } else if (a.lastName < b.lastName) {
                        return -1;
                    }
                    return 0;
                }).map((user) => {
                    return (
                        <ListGroupItem key={user.id}>
                            <div className="d-flex justify-content-between mb-3">
                                <div className="p-2">
                                    {user.firstName} {user.lastName}
                                </div>
                                <div className="p-2">
                                    <button className='btn btn-danger' onClick={() => handleShow(user.id)}>Delete</button>
                                </div>
                            </div>
                        </ListGroupItem>
                    );
                })}
            </ListGroup>

            {/* Modal Component */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this user?</Modal.Body>
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
};

export default UserList;
