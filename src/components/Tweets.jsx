import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import  { getTweets, getUsers } from './redux/actions';

export default function Tweets() {
    const dispatch = useDispatch();
    const allUsers = useSelector((state) => state.users);
    const allTweets = useSelector((state) => state.tweets);

    const fetchTweets = async () => {
        const usersAPI = await fetch(` http://domer.tech:9999/users/`, { method: "GET" });
        const tweetsAPI = await fetch(` http://domer.tech:9999/tweets/`, { method: "GET" });
        const usersResponse = await usersAPI.json();
        const tweetsResponse = await tweetsAPI.json();
        dispatch(getUsers(usersResponse.data));
        dispatch(getTweets(tweetsResponse.data));
        console.log(tweetsResponse.data)
    }

    useEffect(() => fetchTweets(),[]);

    return (
        <div className="tweets">
            {Object.values(allTweets).map((data) => {
                const userId = data.userId;
                const user = Object.values(allUsers).find((data) =>  userId === data.id)
               return( 
                <div id={userId} className="tweet_container"  key={data.id}>
                    <div className="user_info">
                        <div className="tweet_block">
                            <div className="tweet_block_inner">
                                <img className="tweet_avatar" src={user.avatar} alt="avatar"/>
                            </div>
                        </div>
                        <div>
                            <span className="tweet_user_name">{user.name}</span>
                            <span className="tweet_user_username">{user.username}</span>
                        </div>
                    </div>
                    <div className="content_container">
                        <p className="tweet_content">{data.content}</p>
                        <img className="tweet_image" src={data.image} alt="avatar" />
                    </div>
                </div>)})
        }
        </div>)
}