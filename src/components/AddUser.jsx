import React, { useState } from "react";

export default function AddUser () {
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState("");

    const onCreate = async (event) => {
        event.preventDefault();
        await fetch(` http://domer.tech:9999/users/`, { 
            method: "POST",
            headers: {'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify({ 
                name: name,
                username: username,
                avatar: avatar
            }) 
        }) 
        setUsername("");
        setName("");
        setAvatar("");
    }

    return(
        <form className="form" onSubmit={onCreate}>
            <input type="text" name="username" className="form_input" placeholder="Type author's @username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input type="text" name="name" className="form_input" placeholder="Type author's name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" name="avatar" className="form_input" placeholder="Paste avatar's link" value={avatar}  onChange={(e) => setAvatar(e.target.value)}/>
            <input type="submit" className="form_btn-create" value="Add user"/>
        </form> 
    )
}