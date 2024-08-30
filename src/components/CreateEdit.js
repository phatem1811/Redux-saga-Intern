import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Input } from "antd";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useSaveBase from "../hook/useSaveBase";

const EditUser = () => {
    const [form] = Form.useForm();

    const { id } = useParams();
    console.log("check param ", id)
    const navigate = useNavigate();
    const location = useLocation();

    const saveNewUser = useSaveBase()

    console.log("check location", location)


    useEffect(() => {
        if (id) {
            form.setFieldsValue({
                firstName: location.state.firstName,
                lastName: location.state.lastName,
            });


        } else {
            form.resetFields();


        }
    }, [form]);

    const handleSubmit = (values) => {

        saveNewUser(id, values);



    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',

            }}
        >
            <Form form={form} onFinish={handleSubmit} >
                <Form.Item
                    label="First Name"
                    name="firstName"
                    rules={[{ required: true, message: "Please input your first name!" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Last Name"
                    name="lastName"
                    rules={[{ required: true, message: "Please input your last name!" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item style={{ textAlign: "right" }}>
                    <Button onClick={() => navigate("/")} style={{ marginRight: "46px" }}>
                        Back
                    </Button>
                    <Button type="primary" htmlType="submit">
                        {id === undefined ? "Create" : "Update"}
                    </Button>
                </Form.Item>
            </Form>
        </div >
    );
};

export default EditUser;
