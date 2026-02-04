import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
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
        "http://localhost:4000/login",
        {
          ...inputValue,
        },
        { withCredentials: true } // Important for cookies
      );
      const { success, message } = data;
      if (success) {
        toast.success(message);
        setTimeout(() => {
          window.location.href = "http://localhost:3001"; // Redirect to Dashboard
        }, 1000);
      } else {
        toast.error(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form_container">
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit}>
        {/* Input fields for Email and Password */}
        <button type="submit">Submit</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;