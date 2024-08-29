import React, { useState } from "react";
import { List, Button, Popconfirm, Pagination } from "antd";
import useListBase from "../hook/useListBase";
import { Api } from "../api/config";
import EditUserModal from "./EditUser";

const UserList = ({ users, onDeleteUser, onEditUser, editingUser }) => {
    const { data, pagination, setPagination } = useListBase(Api.user);

    const confirm = (userId) => {
        console.log("checkid in list", userId);
        onDeleteUser(userId);

    };
    const cancel = (e) => {
        console.log(e);

    };

    return (
        <>
            <List
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
                                {/* <EditUserModal user={user} edituser={handleupdateuser} /> */}
                                <Button
                                    type="primary"

                                    onClick={() => {
                                        console.log("Edit user >>> ", user);
                                        onEditUser(user);
                                    }}
                                >
                                    Edit
                                </Button>

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
                current={pagination.currentPage}
                total={pagination.total}
                pageSize={pagination.pageSize}
                onChange={(page) => setPagination((prev) => ({ ...prev, currentPage: page }))}
                align="end"
            />
        </>
    );
};

export default UserList;
