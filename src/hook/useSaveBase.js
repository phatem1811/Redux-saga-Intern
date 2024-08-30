import { useCallback } from "react";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import * as api from "../api/users";
import useListBase from "./useListBase";

const useSaveBase = () => {
    const navigate = useNavigate();
    const { handleCreateUser, handleUpdateUser } = useListBase()
    const saveNewUser = useCallback(
        async (id, user) => {


            try {
                console.log("check id truyền vao", id)

                if (id) {
                    console.log("check user update in useSave", user)

                    handleUpdateUser(id, user.firstName, user.lastName)

                }
                else {
                    console.log("check create in useSave")
                    const id = Math.random().toString(36).substr(2, 9);
                    let newUser = {
                        id: id,
                        firstName: user.firstName,
                        lastName: user.lastName
                    }
                    console.log("check create user", newUser)
                    handleCreateUser(newUser)
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
