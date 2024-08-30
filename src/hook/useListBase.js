import axios from "axios";
import React, { useEffect, useState } from "react";
import * as api from "../api/users";

const useListBase = (apiConfig) => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const [pagination, setPagination] = useState({
        total: 0,
        currentPage: 1,
        pageSize: 4,
    });

    const fetchData = async () => {
        try {
            const res = await api.getUsers();
            setData(res.data.data);
            setFilteredData(res.data.data);
            setPagination((prev) => ({
                ...prev,
                total: res.data.data.length,
            }));
        } catch (e) { }
    };

    useEffect(() => {
        fetchData();
    }, [apiConfig]);

    const pageData = filteredData.slice(
        (pagination.currentPage - 1) * pagination.pageSize,
        pagination.currentPage * pagination.pageSize
    );

    const handleCreateUser = async (values) => {
        const id = Math.random().toString(36).substr(2, 9);
        let newUser = {
            id: id,
            firstName: values.firstName,
            lastName: values.lastName
        }
        try {
            console.log("check data in use hook", newUser)
            await api.createUser(newUser);
            fetchData();
        } catch (e) {
            console.error("Failed to create user", e);
        }
    };
    const handleUpdateUser = async (id, values) => {
        try {
            console.log("check update in use hook", id, values.firstName, values.lastName)
            await api.updateUser(id, values.firstName, values.lastName);
            fetchData();
        } catch (e) {
            console.error("Failed to update user", e);
        }
    };
    const handleDeleteUser = async (id) => {
        try {
            console.log("check update in use hook", id)
            await api.deleteUser(id);
            fetchData();
        } catch (e) {
            console.error("Failed to update user", e);
        }
    };


    return {
        data: pageData,
        pagination,
        setPagination,
        handleCreateUser,
        handleUpdateUser, handleDeleteUser
    };
};

export default useListBase;