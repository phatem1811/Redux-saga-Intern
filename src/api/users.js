import axios from 'axios';

export const getUsers = () => {
    return axios.get('/users', {
        params: {
            limit: 1000
        }
    });
};

export const createUser = ({ firstName, lastName }) => {
    console.log("fistname", firstName, "lastname", lastName)
    return axios.post('/users', {
        firstName,
        lastName
    });
};

export const deleteUser = (userId) => {
    console.log("checkid", userId);
    return axios.delete(`/users/${userId}`);
};