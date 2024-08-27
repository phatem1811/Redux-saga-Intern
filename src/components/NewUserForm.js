import React, { Component } from 'react';
import { Button, Form, Input, notification } from 'antd';

class NewUserForm extends Component {
    state = {
        firstName: '',
        lastName: ''
    };

    handleSubmit = values => {
        const { firstName, lastName } = values;

        // Trigger the onSubmit prop function
        this.props.onSubmit({
            firstName,
            lastName
        });

        // Reset the form state
        this.setState({
            firstName: '',
            lastName: ''
        });

        // Show success notification
        notification.success({
            message: ' Created Success',
            description: ` ${firstName} ${lastName} has been successfully created.`,
            placement: 'topRight',
        });
    };

    render() {
        return (
            <Form
                onFinish={this.handleSubmit}
                name="wrap"
                labelCol={{ flex: '110px' }}
                labelAlign="left"
                labelWrap
                wrapperCol={{ flex: 1 }}
                colon={false}
                style={{ maxWidth: 600 }}
                initialValues={this.state}
            >
                <Form.Item
                    label="First Name"
                    name="firstName"
                    rules={[{ required: true, message: 'Please input your first name!' }]}
                >
                    <Input
                        value={this.state.firstName}
                        onChange={e => this.setState({ firstName: e.target.value })}
                    />
                </Form.Item>

                <Form.Item
                    label="Last Name"
                    name="lastName"
                    rules={[{ required: true, message: 'Please input your last name!' }]}
                >
                    <Input
                        value={this.state.lastName}
                        onChange={e => this.setState({ lastName: e.target.value })}
                    />
                </Form.Item>

                <Form.Item label=" ">
                    <Button type="primary" htmlType="submit" block>
                        Create
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default NewUserForm;