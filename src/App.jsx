import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from './components/Navigation';
import AddUser from "./components/AddUser";
import Users from "./components/Users";
import AddTweet from "./components/AddTweet";
import Tweets from "./components/Tweets";

export default function App() {
  return (
    <div className="container">
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/Users" element={<Users/>}/>
          <Route path="/AddUser" element={<AddUser/>}/>
          <Route path="/Tweets" element={<Tweets/>}/>
          <Route path="/AddTweet" element={<AddTweet/>}/>
        </Routes>
      </Router>
    </div>
  );
}