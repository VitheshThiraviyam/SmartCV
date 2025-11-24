import React, { useState } from "react";
import './Register.css';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post('http://localhost:5000/api/auth/register', {
                name,
                email,
                password
            });
            alert("Registration Successfull");
            navigate('/login');
        }
        catch(err)
        {
            console.log(err);
            alert("Registration is Completed, Try Again");
        }
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <h2>Register</h2>
                <p>Create your account to start generating resumes.</p>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

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

                    <button type="submit">Register</button>
                </form>

                <p>
                    Already have an account? <Link to={'/login'}>Login</Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
