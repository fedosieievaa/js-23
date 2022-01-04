import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import  { getUsers } from './redux/actions';

export default function Users() {
    const dispatch = useDispatch();
    const allUsers = useSelector((state) => state.users);
    
    const fetchUsers = async () => {
        const usersAPI = await fetch(` http://domer.tech:9999/users/`, { method: "GET" });
        const usersResponse = await usersAPI.json();
        console.log(usersResponse.data)
        dispatch(getUsers(usersResponse.data));
    }

    useEffect(() => fetchUsers(),[]);
    
    return (
        <div className="users">
            {Object.values(allUsers).map(({id, name, username, avatar }) => {
               return( 
                <div id={id} className="user_container"  key={id}>
                    <div className="block">
                        <div className="block_inner">
                            <img className="image" src={avatar} alt="avatar"/>
                        </div>
                    </div>
                    <div>
                        <h3 className="user_name">{name}</h3>
                        <span className="user_username">{username}</span>
                    </div>
                </div>)})}
        </div>)
}