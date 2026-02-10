import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const SignupForm = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
        username: "",
    });
    const { email, password, username } = inputValue;

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
                "https://zerodhaclone-backend-s41p.onrender.com/signup",
                {
                    ...inputValue,
                },
                { withCredentials: true }
            );
            const { success, message } = data;
            if (success) {
                toast.success(message);
                setTimeout(() => {
                    const token = data.token;
                    window.location.href = `http://localhost:3001?token=${token}`; // Redirect to Dashboard with token
                }, 1000);
            } else {
                toast.error(message);
            }
        } catch (error) {
            console.log(error);
            toast.error("An error occurred during signup");
        }
    };

    return (
        <div className="form_container" style={{ padding: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderRadius: "8px", maxWidth: "400px", margin: "0 auto", backgroundColor: "white" }}>
            <h3 className="text-center mb-4">Sign Up</h3>
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
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        name="username"
                        className="form-control"
                        value={username}
                        placeholder="Enter your username"
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
                <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                <div className="mt-3 text-center">
                    <span>Already have an account? <Link to="/login" style={{ textDecoration: "none" }}>Login</Link></span>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignupForm;
