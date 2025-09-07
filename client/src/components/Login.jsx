import React from "react";
import { FcGoogle } from "react-icons/fc"; // Google icon
import { FaGithub } from "react-icons/fa"; // GitHub icon
import loginStyles from "../assets/styles/login-styles";  // your style object

const Login = () => {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:3001/api/auth/google";
  };

  const handleGithubLogin = () => {
    window.location.href = "http://localhost:3001/api/auth/github";
  };

  return (
    <div style={loginStyles.container} >
      <div style={loginStyles.leftPane}>
        <div style={loginStyles.loginBox}>
          <h1 style={loginStyles.title}>ARP Social</h1>
          <h2 style={loginStyles.heading}>Login to your account</h2>
          
          <button style={loginStyles.googleButton} onClick={handleGoogleLogin}>
            <FcGoogle style={{ marginRight: "10px", fontSize: "1.2rem" }} />
            Login with Google
          </button>

          <button style={loginStyles.githubButton} onClick={handleGithubLogin}>
            <FaGithub style={{ marginRight: "10px", fontSize: "1.2rem" }} />
            Login with GitHub
          </button>
        </div>
      </div>

      <div style={loginStyles.rightPane}></div>
    </div>
  );
};

export default Login;
