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
        const response = await apiInstance({
            url: Api.user.createUser.url,
            method: Api.user.createUser.method,
            data: newUser,
        });
        return response;
    } catch (e) {
        console.error("Failed to create user", e);
    }
};
