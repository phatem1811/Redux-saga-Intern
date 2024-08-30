import { useCallback } from "react";
import { notification } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import * as api from "../api/users";
import { Api } from "../api/config";
import useListBase from "./useListBase";

const useSaveBase = () => {
    const navigate = useNavigate();
    const saveNewUser = useCallback(
        async (id, values, url, method) => {

            try {
                console.log("check id truyền vao", id)

                if (id) {

                    api.update(id, values, url, method)

                }
                else {
                    console.log("check create in useSave")


                    console.log("check create user", values)
                    api.create(values, url, method)
                    navigate("/");
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
