import { GET_USERS } from "./actions"

const initialState = {
    users: [],
    state1: ""
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
            }
        default:
            return state;
    }
}