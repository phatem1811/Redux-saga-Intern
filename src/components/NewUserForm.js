import React, { useState } from 'react';
import { Button, Form, Input, notification } from 'antd';

const NewUserForm = ({ onSubmit }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = values => {
        const { firstName, lastName } = values;

        onSubmit({
            firstName,
            lastName
        });

        setFirstName('');
        setLastName('');

        notification.success({
            message: 'Created Success',
            description: `${firstName} ${lastName} has been successfully created.`,
            placement: 'topRight',
        });
    };

    return (
        <Form
            onFinish={handleSubmit}
            name="wrap"
            labelCol={{ flex: '110px' }}
            labelAlign="left"
            labelWrap
            wrapperCol={{ flex: 1 }}
            colon={false}
            style={{ maxWidth: 600 }}
            initialValues={{ firstName, lastName }}
        >
            <Form.Item
                label="First Name"
                name="firstName"
                rules={[{ required: true, message: 'Please input your first name!' }]}
            >
                <Input
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
            </Form.Item>

            <Form.Item
                label="Last Name"
                name="lastName"
                rules={[{ required: true, message: 'Please input your last name!' }]}
            >
                <Input
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
            </Form.Item>

            <Form.Item label=" ">
                <Button type="primary" htmlType="submit" block>
                    Create
                </Button>
            </Form.Item>
        </Form>
    );
};

export default NewUserForm;
