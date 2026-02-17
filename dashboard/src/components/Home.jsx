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
        // Store in localStorage for robust access
        localStorage.setItem("token", token);
        // Set cookie manually (optional fallback)
        document.cookie = `token=${token}; path=/; max-age=86400`;
        // Remove token from URL
        window.history.replaceState({}, document.title, window.location.pathname);
      }

      try {
        // Backend ke verification route par request bhejo
        const { data } = await axios.post(
          "https://zerodhaclone-backend-s41p.onrender.com/verify",
          {},
          {
            withCredentials: true,
            headers: {
              "Authorization": `Bearer ${token || localStorage.getItem("token")}`
            }
          }
        );

        // Agar user verify nahi hua (status: false), toh login page par bhej do
        if (!data.status) {
          window.location.href = "https://zerodhaclone-project.onrender.com";
        }
      } catch (err) {
        // Agar koi error aaye (server band hai ya network issue), tab bhi login par bhejo
        console.log(err);
        window.location.href = "https://zerodhaclone-project.onrender.com";
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