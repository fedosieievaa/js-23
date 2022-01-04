import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import  { getUsers } from './redux/actions';

export default function AddTweet() {
    const dispatch = useDispatch();
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");
    const [id, setId] = useState("");
    const allUsers = useSelector((state) => state.users);
    const userId = Object.values(allUsers).find((data) => data.username === id);

    const fetchUsers = async () => {
        const usersAPI  = await fetch("http://domer.tech:9999/users/", { method: "GET" });
        const usersResponse = await usersAPI .json();
        dispatch(getUsers(usersResponse.data));
    };

    useEffect(() => fetchUsers(), []);

    const onCreate = async (event) => {
        event.preventDefault();
        await fetch(` http://domer.tech:9999/tweets/`, { 
            method: "POST",
            headers: {'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify({ 
                content: content,
                image: image,
                userId: userId.id
            }) 
        }) 
        setContent("");
        setImage("");
    }

    return(
        <>
        <form className="form" onSubmit={onCreate}>
            <select className="form_input" onChange={(e) => setId(e.target.value)}>
            {Object.values(allUsers).map((data) => {
                return(<option name={data.id} >{data.username}</option>)
                })} 
            </select>
            <input type="text" name="content" className="form_input" placeholder="Type content" value={content} onChange={(e) => setContent(e.target.value)}/>
            <input type="text" name="image" className="form_input" placeholder="Paste content's image" value={image}  onChange={(e) => setImage(e.target.value)}/>
            <input type="submit" className="form_btn-create" value="Create post"/>
        </form> 
        </>
    )}