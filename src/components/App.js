import React, { Component } from 'react';
import NewUserForm from './NewUserForm';
import UserList from './UserList';
import { connect } from 'react-redux';
import { getUsersRequest, createUserRequest, deleteUserRequest, updateUserRequest } from '../actions/users';
import { Alert } from 'reactstrap';


class App extends Component {

  constructor(props) {
    super(props);

    this.props.getUsersRequest();
  }
  handleCreateUserSubmit = ({ firstName, lastName }) => {
    const id = Math.random().toString(36).substr(2, 9);
    this.props.createUserRequest({
      id,
      firstName,
      lastName
    });
  };
  handleDeleteUserClick = (userId) => {
    this.props.deleteUserRequest(userId)
  }


  handleUpdateUserClick = (id, firstName, lastName) => {
    console.log(`check update data`, id, firstName, lastName)
    this.props.updateUserRequest({
      id,
      firstName,
      lastName
    });

  }

  render() {
    const users = this.props.users;
    console.log("check user", users)
    return (
      <div style={{ margin: '0 auto', padding: '20px', maxWidth: '600px' }}>

        {/* <Alert color="danger" isOpen={!!this.props.users.error} toggle={this.handleCloseAlert}>
          {this.props.users.error}
        </Alert> */}

        <NewUserForm onSubmit={this.handleCreateUserSubmit} />

        {!!users.items && !!users.items.length &&
          <UserList onDeleteUser={this.handleDeleteUserClick}
            onUpdateUser={this.handleUpdateUserClick}
            users={users.items} />}

      </div>
    );
  }
}

export default connect(({ users }) => ({ users }), {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
  updateUserRequest
})(App);