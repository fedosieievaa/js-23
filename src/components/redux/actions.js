export const GET_USERS = "GET_USERS";
export const GET_TWEETS = "GET_TWEETS";

export const getUsers = (data) => ({
    type: GET_USERS,
    payload: {
        ...data
    },
})

export const getTweets = (data) => ({
    type: GET_TWEETS,
    payload: {
        ...data
    },
})