import React, { useEffect, useState } from 'react';
import NewUserForm from './NewUserForm';
import UserList from './UserList';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersRequest, createUserRequest, deleteUserRequest, updateUserRequest } from '../actions/users';
import useListBase from '../hook/useListBase';
import { Api } from "../api/config";
import { Alert, notification, Button } from "antd";




const App = () => {

  const [editingUser, setEditingUser] = useState(null);

  const dispatch = useDispatch();

  const { data, handleCreate } = useListBase(Api.user);

  const [User, setUser] = useState({
    id: "",
    firstName: "",
    lastName: ""
  });

  console.log("dataa user", data);



  const handleCreateUserSubmit = ({ firstName, lastName }) => {
    const id = Math.random().toString(36).substr(2, 9);
    let newUser = {
      id: id,
      firstName: firstName,
      lastName: lastName
    }
    console.log("new user", newUser)
    handleCreate(newUser)
  };

  const handleDeleteUserClick = (userId) => {

  };

  const handleEditUserClick = (user) => {

  };



  const handleCloseAlert = () => {

  };

  return (
    <div
      style={{ margin: "0 auto", padding: "20px", maxWidth: "600px", flex: "" }}
    >
      {/* <Alert
        type="error"
        message={data.error}
        banner
        closable
        onClose={handleCloseAlert}
        style={{ marginBottom: "20px" }}
      /> */}

      <div style={{
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: "20px",
      }}
      >
      </div>
      <NewUserForm onSubmit={handleCreateUserSubmit} />


      <UserList
        onDeleteUser={handleDeleteUserClick}
        onEditUser={handleEditUserClick}
        users={data.items}
      />
    </div>
  );
};

export default App;