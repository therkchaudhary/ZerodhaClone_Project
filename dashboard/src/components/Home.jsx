import React, { useEffect } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import axios from "axios"; // API call karne ke liye

const Home = () => {

  useEffect(() => {
    const checkAuth = async () => {
      // 1. Check if token is in URL (redirected from login)
      const queryParams = new URLSearchParams(window.location.search);
      const urlToken = queryParams.get("token");

      if (urlToken) {
        // Store in localStorage for robust access
        localStorage.setItem("token", urlToken);
        // Remove token from URL for cleaner UI
        window.history.replaceState({}, document.title, window.location.pathname);
      }

      // 2. Get token from storage
      const token = localStorage.getItem("token");

      // Guard Clause: If no token exists at all, redirect to login immediately
      // NOT making a backend call prevents "Bearer null" errors and loops
      if (!token) {
        console.warn("No token found in storage. Redirecting to login...");
        window.location.href = "https://zerodhaclone-project.onrender.com";
        return;
      }

      try {
        // Backend ke verification route par request bhejo
        const { data } = await axios.post(
          "https://zerodhaclone-backend-s41p.onrender.com/verify",
          {},
          {
            withCredentials: true,
            headers: {
              "Authorization": `Bearer ${token}` // Ensure we send the token we found
            }
          }
        );

        // Agar user verify nahi hua (status: false), toh login page par bhej do
        if (!data.status) {
          console.warn("Token verification failed at backend. Clearing token and redirecting.");
          localStorage.removeItem("token"); // Clear bad token
          document.cookie = "token=; path=/; max-age=0"; // Clear cookie if any
          window.location.href = "https://zerodhaclone-project.onrender.com";
        } else {
          // console.log("User verified:", data.user);
        }
      } catch (err) {
        // Agar koi error aaye (server band hai ya network issue), tab bhi login par bhejo
        console.error("Verification Error:", err);
        // Only redirect if it's strictly an auth error, or user can't use the app anyway
        localStorage.removeItem("token"); // Clear potentially bad token
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