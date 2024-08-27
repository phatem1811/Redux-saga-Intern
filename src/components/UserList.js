import React, { useState } from "react";
import { List, Button, message, Popconfirm, Modal, Form, Input } from 'antd';
import EditUserModal from "./EditUser";
const UserList = ({ users, onDeleteUser, onUpdateUser }) => {

    const confirm = (userId) => {
        console.log(userId);
        onDeleteUser(userId);
        message.success("Deleted user");
    };
    const handleupdateuser = (id, fname, lname) => {
        console.log("check  in userlist", id, fname, lname)
        onUpdateUser(id, fname, lname)
    }
    const cancel = (e) => {
        console.log(e);
        message.error("Cancel Delete");
    };

    return (
        <>
            <List
                dataSource={users.sort((a, b) => {
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
                })}
                renderItem={(user) => (

                    <List.Item key={user.id}>
                        <section style={{ display: 'flex', width: '100%' }}>
                            <div style={{ flexGrow: 1 }}>
                                {user.firstName} {user.lastName}
                            </div>
                            <div>

                                <EditUserModal user={user} edituser={handleupdateuser} />
                                <Popconfirm
                                    title="Delete User"
                                    description="Are you sure to delete this user?"
                                    onConfirm={() => confirm(user.id)}
                                    onCancel={cancel}
                                    okText="Yes"
                                    cancelText="No"

                                >
                                    <Button type="primary" danger>Delete</Button>
                                </Popconfirm>
                            </div>

                        </section>
                    </List.Item>
                )}
            />


        </>
    );
};

export default UserList;