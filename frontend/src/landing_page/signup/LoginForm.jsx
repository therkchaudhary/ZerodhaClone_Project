import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

// FIX: Global credentials enabled for cross-origin requests
axios.defaults.withCredentials = true;

const LoginForm = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
    });
    const { email, password } = inputValue;

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "https://zerodhaclone-backend-s41p.onrender.com/login",
                {
                    email,
                    password,
                },
                { 
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true 
                }
            );
            
            const { success, message, token } = data;
            
            if (success) {
                toast.success(message);
                
                // Dashboard URL ko exactly wahi rakhein jo Render par live hai
                const dashboardUrl = "https://zerodhaclone-dashboard-gzx3.onrender.com";
                
                setTimeout(() => {
                    // Token ko query parameter mein bhej rahe hain taaki dashboard access kar sake
                    window.location.href = `${dashboardUrl}?token=${token}`; 
                }, 1000);
            } else {
                toast.error(message || "Login failed");
            }
        } catch (error) {
            console.error("Login Error:", error);
            const errorMsg = error.response?.data?.message || "Internal Server Error or CORS blocked";
            toast.error(errorMsg);
        }
    };

    return (
        <div className="form_container" style={{ padding: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderRadius: "8px", maxWidth: "400px", margin: "0 auto", backgroundColor: "white" }}>
            <h3 className="text-center mb-4">Login Account</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={email}
                        placeholder="Enter your email"
                        onChange={handleOnChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        value={password}
                        placeholder="Enter your password"
                        onChange={handleOnChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
                <div className="mt-3 text-center">
                    <span>Don't have an account? <Link to="/signup" style={{ textDecoration: "none" }}>Sign up</Link></span>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default LoginForm;