import React, { useEffect } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import axios from "axios"; // API call karne ke liye

const Home = () => {

  useEffect(() => {
    const checkAuth = async () => {
      // 1. Check if token is in URL (redirected from login)
      const queryParams = new URLSearchParams(window.location.search);
      const token = queryParams.get("token");

      if (token) {
        // Set cookie manually
        // Note: HttpOnly is false so we can set it. Backend allows this.
        document.cookie = `token=${token}; path=/; max-age=86400`;
        // Remove token from URL for cleaner look
        window.history.replaceState({}, document.title, window.location.pathname);
      }

      try {
        // Backend ke verification route par request bhejo
        const { data } = await axios.post(
          "http://localhost:4000", // Aapka Backend URL
          {},
          { withCredentials: true } // Isse cookies (token) saath mein jayenge
        );

        // Agar user verify nahi hua (status: false), toh login page par bhej do
        if (!data.status) {
          window.location.href = "http://localhost:3000/login";
        }
      } catch (err) {
        // Agar koi error aaye (server band hai ya network issue), tab bhi login par bhejo
        console.log(err);
        window.location.href = "http://localhost:3000/login";
      }
    };

    checkAuth(); // Function ko call karo
  }, []);

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;