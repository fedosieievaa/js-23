import { GET_USERS, GET_TWEETS } from "./actions"

const initialState = {
    users: [],
    tweets: [],
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
            }
        case GET_TWEETS:
            return {
                ...state,
                tweets: action.payload,
            }
        default:
            return state;
    }
}