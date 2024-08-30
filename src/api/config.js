import axios from "axios";

export const apiInstance = axios.create({
    baseURL: "https://mithril-rem.fly.dev/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export const Api = {
    user: {
        getUser: {
            url: "/users",
            method: "GET",
        },
        createUser: {
            url: "/users",
            method: "POST",
        },
        updateUser: {
            url: "/users/",
            method: "PUT",
        },
        deleteUser: {
            url: "/users/",
            method: "DELETE",
        },
    },
};