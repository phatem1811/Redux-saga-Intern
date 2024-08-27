import React, { useState } from 'react';
import { Modal, Button, Form, Input } from 'antd';
import { useDisclosure } from "@chakra-ui/react";


function EditUserModal({ user, edituser, props }) {
    // const [open, setopen] = useState(false);
    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');

    const { isOpen, onOpen, onClose } = useDisclosure();
    const showModal = () => {
        onOpen()

        setfname(user.firstName)
        setlname(user.lastName)



    };

    const handleOk = () => {

        // Xử lý cập nhật thông tin người dùng ở đây, ví dụ gửi dữ liệu lên server
        // props.onSubmit({
        //     fname,
        //     lname
        // });
        edituser(user.id, fname, lname);
        onClose();
        // setopen(false);
    };

    // const handleCancel = () => {
    //     // setopen(false);
    // };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Edit User
            </Button>
            <Modal
                title="Edit User Information"

                visible={isOpen}
                onOk={handleOk}
                onCancel={onClose}
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
                    <Form.Item label="Last Name">
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