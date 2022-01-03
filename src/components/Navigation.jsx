import React from "react";
import { Link } from "react-router-dom";
export default function Navigation() {
    return(
        <div className="navigation">
            <Link className="nav_item" to="/Users">Users</Link>
            <Link className="nav_item" to="/AddUser">Add user</Link>
            <Link className="nav_item" to="/Tweets">Tweets</Link>
            <Link className="nav_item" to="/AddTweet">Add tweet</Link>
        </div>
    )
}