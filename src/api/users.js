import axios from "axios";
import { apiInstance, Api } from "./config";


export const getUsers = async () => {
    try {
        const response = await apiInstance({
            url: Api.user.getUser.url,
            method: Api.user.getUser.method,
        });
        return response;
    } catch (e) {
        console.error("Failed to get users", e);
    }
};
export const createUser = async (newUser) => {
    try {
        console.log("check data in api", newUser)
        const response = await apiInstance({
            url: Api.user.createUser.url,
            method: Api.user.createUser.method,
            data: newUser,
        });
        console.log("check respone create", response)
        return response;
    } catch (e) {
        console.error("Failed to create user", e);
    }
};

export const updateUser = async (id, firstName, lastName) => {
    try {
        console.log("check data update in api", id, firstName, lastName)


        // const response = await axios.put('https://mithril-rem.fly.dev/api/users/' + id, {
        //     firstName: firstName,
        //     lastName: lastName,

        // })


        const response = await apiInstance({
            url: Api.user.updateUser.url + id,
            method: Api.user.updateUser.method,
            data: { firstName, lastName },
        });
        console.log("check respone update", response)
        return response;



    } catch (e) { }
};
export const deleteUser = async (id) => {
    try {
        console.log("check data delete in api", id)

        const response = await apiInstance({
            url: Api.user.deleteUser.url + id,
            method: Api.user.deleteUser.method,
        });
        console.log("check respone update", response)
        return response;



    } catch (e) { }
};
