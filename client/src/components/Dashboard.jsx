import React, { useEffect, useState } from "react";
import Logout from "./Logout";
import dashboardStyles from "../assets/styles/dashboard-styles";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  const handleLoginRedirect = () => {
    window.location.href = process.env.REACT_APP_URL;
  };

  useEffect(() => {
    fetch("http://localhost:3001/api/users/user", {
      credentials: "include", // VERY important: sends session cookie
    })
      .then((res) => {
        if (!res.ok) throw new Error("Not logged in");
        return res.json();
      })
      .then((data) => setUser(data))
      .catch(() => setUser(null));
  }, []);

  if (!user) {
    return (
      <div style={dashboardStyles.loginContainer}>
        <h2 style={{color: "black"}}>Uh Oh! Are you Lost?</h2>
        <h2 style={{color: "black"}}>You must log in first.</h2>
        <button style={dashboardStyles.loginButton} onClick={handleLoginRedirect}>
          Login
        </button>
      </div>
    );
  }

  return (
    <div style={dashboardStyles.container}>
      <div style={dashboardStyles.welcomeContainer}>
        <h1 style={dashboardStyles.welcomeTitle}>Welcome, {user.name} 👋</h1>
        <p style={dashboardStyles.emailText}>Email: {user.email}</p>
        <Logout />
      </div>
    </div>
  );
};

export default Dashboard;
