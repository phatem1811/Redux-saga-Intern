import React, { useState } from "react";
import { List, Button, Popconfirm, Pagination } from "antd";
import useListBase from "../hook/useListBase";
import { Api } from "../api/config";
import EditUserModal from "./EditUser";

const UserList = ({ users, onDeleteUser, onEditUser, editingUser }) => {
    const { data, total, paginate, currentPage } = useListBase(Api.user);

    const confirm = (userId) => {
        console.log(userId);
        onDeleteUser(userId);

    };
    const cancel = (e) => {
        console.log(e);

    };
    const handleupdateuser = (id, fname, lname) => {
        console.log("check  in userlist", id, fname, lname)

    }
    return (
        <>
            <List style={{ marginTop: "20px", marginBottom: "20px" }}
                dataSource={data.sort((a, b) => {
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
                        <section style={{ display: "flex", width: "100%" }}>
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
            <Pagination
                current={currentPage}
                total={total}
                pageSize={5}
                onChange={paginate}
                align="end"
            />
        </>
    );
};

export default UserList;
