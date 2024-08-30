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
export const create = async (values, url, method) => {
    try {
        console.log("check data in api", values)
        const response = await apiInstance({
            url: url,
            method: method,
            data: values,
        });
        console.log("check respone create", response)
        return response;
    } catch (e) {
        console.error("Failed to create user", e);
    }
};

export const update = async (id, values, url, method) => {
    try {


        const response = await apiInstance({
            url: url + id,
            method: method,
            data: values,
        });
        console.log("check respone update", response)
        return response;



    } catch (e) { }
};
export const Delete = async (id, url, method) => {
    try {
        console.log("check data delete in api", id)

        const response = await apiInstance({
            url: url + id,
            method: method,
        });
        console.log("check respone update", response)
        return response;



    } catch (e) { }
};
