import { Types } from "../actions/users";

const INITIAL_STATE = {
    items: [],
    error: "",
};

export default function users(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.GET_USERS_SUCCESS: {
            console.log(" check action", action.payload.items)
            return {
                items: action.payload.items,
            };

        }

        case Types.CREATE_USER_REQUEST: {
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        }


        case Types.UPDATE_USER_REQUEST: {
            const { id, firstName, lastName } = action.payload;

            const updatedItems = state.items.map(user =>
                user.id === id ? { ...user, firstName, lastName } : user
            );
            return {
                ...state,
                items: updatedItems,
                error: "", // Reset lỗi nếu có
            };
        }

        case Types.DELETE_USER_REQUEST: {
            console.log("check user delete", action.payload.userId);
            const updatedItems = state.items.filter((user) => user.id !== action.payload.userId);
            return {
                ...state,
                items: updatedItems,
            };

            // return {
            //     items: action.payload.items
            // }
        }

        case Types.USERS_ERROR: {
            console.log("check eror", action.payload.error)
            return {
                ...state,
                error: action.payload.error
            };
        }
        default: {
            return state;
        }
    }
}