
const dashboardStyles = {
 container: {
    minHeight: "100vh",                  // ensures it fills the full viewport
    margin: 0,                           // kill extra margin
    padding: 0,                          // remove padding too
    textAlign: "center",
    background: "linear-gradient(to right, #4facfe, #00f2fe)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",            // vertically center content
    alignItems: "center",                // horizontally center content
  },
  welcomeContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.95)", // softer white with slight transparency
    padding: "30px 40px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)", // nice shadow effect
    maxWidth: "400px",
    margin: "40px auto", // centers horizontally
  },
  welcomeTitle: {
    fontSize: "2rem",
    color: "rgba(0, 0, 0, 1)",
    marginBottom: "50px",
  },
  emailText: {
    fontSize: "1rem",
    color: "rgba(0, 0, 0, 1)",
  },
  loginContainer: {
    textAlign: "center",
    marginTop: "50px",
  },
  loginButton: {
    padding: "10px 20px",
    marginTop: "10px",
    cursor: "pointer",
    backgroundColor: "rgb(0, 0, 0)",
    color: "white",
    border: "none",
    borderRadius: "5px",
  },
};

export default dashboardStyles
