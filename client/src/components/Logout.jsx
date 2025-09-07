import React from "react";
import { useNavigate } from "react-router-dom";
import logoutStyles from "../assets/styles/logout-styles";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/users/logout", {
        method: "POST",
        credentials: "include", // send cookies
      });

      if (!res.ok) throw new Error("Logout failed");

      // Redirect to login page
      navigate("/"); 
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      onClick={handleLogout}
      style={logoutStyles.logoutButton}
    >
      Logout
    </button>
  );
};

export default LogoutButton;

// TODO: Change all URLS to prod URLS