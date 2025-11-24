import React, { useState } from "react";
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post('http://localhost:5000/api/auth/login',{
                email,
                password
            });
            console.log(res);
            localStorage.setItem("token",res.data.token);
            alert("Login Successfull");
            navigate('/profile');
        }
        catch(err)
        {
            alert("Invalid Informations");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <p className="login-subtitle">Welcome back! Continue building your resume.</p>

                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit">Login</button>
                </form>

                <p className="signup-text">
                    Don't have an account? <Link to={'/register'}>Sign Up</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
