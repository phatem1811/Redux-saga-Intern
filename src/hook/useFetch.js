import { useState, useCallback } from "react";
import { apiInstance } from "../api/config";

const useFetch = () => {
    const [data, setData] = useState(null);

    const fetchData = useCallback(async (id, url, method, values) => {
        console.log("check data in useFetch", id + url + method + values)

        try {
            const response = await apiInstance({
                url: url + id,
                method: method,
                data: values,
            });
            console.log("check response in fetch", response)
            setData(response);
            return response;
        } catch (e) {

            console.error("API call failed", e);
        } finally {

        }
    }, []);

    return { data, fetchData };
};

export default useFetch;
