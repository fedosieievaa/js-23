export const GET_USERS = "GET_USERS";
export const GET_TWEETS = "GET_TWEETS";
export const POST_USER = "POST_USER";
export const POST_TWEET = "POST_TWEET";

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
export const postUser = (user) => ({
    type: POST_USER,
    payload: user,
})
export const postTweet = (tweet) => ({
    type: POST_TWEET,
    payload: tweet,
})