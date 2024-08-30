import { useCallback } from "react";
import { notification } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import * as api from "../api/users";
import { Api } from "../api/config";
import useFetch from "./useFetch";

const useSaveBase = (apiCreate, apiUpdate) => {
    const { fetchData } = useFetch()
    const navigate = useNavigate();
    const getPreUrl = (getUrl) => {
        if (getUrl) {
            return `/${getUrl}`;
        }
        return navigate(-1);
    };

    const saveNewUser = useCallback(
        async (id, values, getUrl) => {

            try {
                console.log("check api create truyền vao", apiCreate)

                if (id) {
                    //update

                    fetchData(apiUpdate.url, apiUpdate.method, values, { id: id })

                    // api.update(id, values, apiUpdate.url, apiUpdate.method)

                    const url = getPreUrl(getUrl)
                    navigate(url);

                }
                else {
                    //create
                    console.log("check create user", values)
                    fetchData(apiCreate.url, apiCreate.method, values)

                    // api.create(values, apiCreate.url, apiCreate.method)
                    const url = getPreUrl(getUrl)

                    navigate(url);

                }

                // Navigate to home or another page after saving



            } catch (error) {
                notification.error({
                    message: 'Error',
                    description: 'An error occurred while saving the user.',
                });
                console.error("Save user error: ", error);
            }
        },
        [navigate]
    );

    return saveNewUser;
};

export default useSaveBase;
