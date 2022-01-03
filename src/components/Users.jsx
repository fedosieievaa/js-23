// import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import  {getUsers} from './redux/actions';

export default function Users() {
    // const dispatch = useDispatch();



    const getUsers = (id, name, username, avatar) => {
        const users = document.querySelector('#users')
        const template=`
            <div class="user_container" id=${id}>
                <img src=${avatar} alt="avatar" width="100px" />
                <div>
                    <h3 class="user_name">${name}</h3>
                    <span class="user_username">${username}</span>
                </div>
            </div>`
        users.insertAdjacentHTML("beforeend", template);
    }

    const fetchUsers = () => {
        const server = fetch(
            ` http://domer.tech:9999/users/`, {
                method: "GET",
            }
        );
        server
            .then((response) => response.json())
            .then((data) => {
                console.log(data.data)
                data.data.map(({ id, name, username, avatar }) => getUsers(id, name, username, avatar))})
            .catch((err) => {
                console.log("Error:", err);
            })
    }
    // const allUsers = useSelector((state) => state.users)

    return (<div id="users">{fetchUsers()}</div>)
}