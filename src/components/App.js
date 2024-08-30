import React, { useEffect, useState } from 'react';

import UserList from './UserList';
import useListBase from '../hook/useListBase';
import { Api } from "../api/config";
import { Alert, notification, Button } from "antd";
import { useNavigate } from "react-router-dom";
import * as api from "../api/users";
import useFetch from '../hook/useFetch';

const App = () => {

  const navigate = useNavigate()
  const { fetchData } = useFetch()

  const { data, handleDeleteUser } = useListBase(Api.user);
  console.log("check dataa", data)

  const handleDeleteUserClick = (id) => {


    // console.log("check id delete", id)
    // let url = `${Api.user.deleteUser.url}${id}`


    // api.Delete(id, Api.user.deleteUser.url, Api.user.deleteUser.method)
    fetchData(Api.user.deleteUser.url, Api.user.deleteUser.method, null, { id: id })
  };

  const handleEditUserClick = (user) => {

    navigate(`/user/${user.id}`, { state: user });
  };



  const handleCreate = () => {
    navigate(`/user/create`, { state: "Create" });
  };

  return (
    <div
      style={{ margin: "0 auto", padding: "20px", maxWidth: "600px", flex: "" }}
    >

      <div style={{
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: "20px",
      }}
      >
      </div>
      <Button type='primary' onClick={handleCreate}>
        Create
      </Button>


      <UserList
        onDeleteUser={handleDeleteUserClick}
        onEditUser={handleEditUserClick}
        users={data.items}
      />
    </div>
  );
};

export default App;