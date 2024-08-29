import axios from "axios";
import React, { useEffect, useState } from "react";

import { Api } from "../api/config";
import * as api from "../api/users"


const useListBase = (config) => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);

    const fetchData = async () => {
        try {
            const res = await api.getUsers();
            setData(res.data.data);
            setFilteredData(res.data.data);
        } catch (e) { }
    };

    useEffect(() => {
        fetchData();
    }, [config]);



    const paginate = (page) => {
        setCurrentPage(page);
    };

    const pageData = filteredData.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );
    const handleCreate = async (newUserData) => {
        try {
            await api.createUser(newUserData);
            fetchData();
        } catch (e) {
            console.error("Failed to create user", e);
        }
    };

    return {
        data: pageData,
        total: filteredData.length,
        handleCreate,
        paginate,
        currentPage,
    };
};

export default useListBase;
