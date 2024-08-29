import React, { useState } from 'react';
import { Modal, Button, Form, Input, message, label } from 'antd';
import useDisclosure from '../hook/useDisclosure';

function EditUserModal({ user, edituser }) {
    const { isOpen, open, close } = useDisclosure();
    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');

    const showModal = () => {
        open();
        setfname(user.firstName);
        setlname(user.lastName);
    };

    const handleOk = () => {
        if (!fname.trim() || !lname.trim()) {
            message.warning('Please fill in both First Name and Last Name.');
            return;
        }

        edituser(user.id, fname, lname);
        close();
    };
    return (
        <>

            <Button type="primary" onClick={showModal}>
                Edit User
            </Button>
            <Modal
                title="Edit User Information"
                open={isOpen}
                onOk={handleOk}
                onCancel={close}
                okText="Save"
                cancelText="Close"
            >
                <Form layout="vertical">
                    <Form.Item label="First Name">

                        <Input
                            value={fname}
                            onChange={(e) => setfname(e.target.value)}
                            placeholder="Enter first name"


                        />
                    </Form.Item>
                    <Form.Item label="Last Name" >
                        <Input
                            value={lname}
                            onChange={(e) => setlname(e.target.value)}
                            placeholder="Enter last name"

                        />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}

export default EditUserModal;
