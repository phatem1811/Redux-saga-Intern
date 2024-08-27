import React, { useEffect } from 'react';
import NewUserForm from './NewUserForm';
import UserList from './UserList';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersRequest, createUserRequest, deleteUserRequest, updateUserRequest } from '../actions/users';
// import { Alert } from 'reactstrap';

const App = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  useEffect(() => {
    dispatch(getUsersRequest());
  }, [dispatch]);

  const handleCreateUserSubmit = ({ firstName, lastName }) => {
    const id = Math.random().toString(36).substr(2, 9);
    dispatch(createUserRequest({
      id,
      firstName,
      lastName
    }));
  };

  const handleDeleteUserClick = (userId) => {
    dispatch(deleteUserRequest(userId));
  };

  const handleUpdateUserClick = (id, firstName, lastName) => {
    console.log(`check update data`, id, firstName, lastName);
    dispatch(updateUserRequest({
      id,
      firstName,
      lastName
    }));
  };

  return (
    <div style={{ margin: '0 auto', padding: '20px', maxWidth: '600px' }}>
      {/* <Alert color="danger" isOpen={!!users.error} toggle={this.handleCloseAlert}>
        {users.error}
      </Alert> */}

      <NewUserForm onSubmit={handleCreateUserSubmit} />

      {!!users.items && !!users.items.length &&
        <UserList onDeleteUser={handleDeleteUserClick}
          onUpdateUser={handleUpdateUserClick}
          users={users.items} />}
    </div>
  );
};

export default App;
