import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className="head">
                <h1>AI - BASED RESUME GENERATOR</h1>
            </div>
            <div className="nav-items">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </div>
    )
}

export default Navbar;
