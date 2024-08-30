import { useState, useCallback } from "react";
import { apiInstance } from "../api/config";

const useFetch = () => {
    const [data, setData] = useState(null);


    const fetchData = useCallback(async (url, method, values = null, pathParams = {}) => {



        console.log("check url in fetch", pathParams.id)
        try {
            const response = await apiInstance({
                url: url + pathParams.id,
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
