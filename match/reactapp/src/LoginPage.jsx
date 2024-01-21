import React, { useState, useEffect } from "react";
import axios from "axios";
import ashesicampus from "./components/icons/ashesicampus.jpg";
import ashesilogo from "./components/icons/ashesilogo.png";
import { useNavigate, Routes, Route, Link } from "react-router-dom";
import HomePage from "./RFHomePage"; // Import HomePage
import Cookies from "js-cookie";

const ProtectedHome = ({ token }) => {
  const navigate = useNavigate();

  return <HomePage />; // Render HomePage if authorized
};

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  // Move useEffect inside Login component
  useEffect(() => {
    setupAxiosInterceptors();
  }, []);

  function setupAxiosInterceptors() {
    axios.interceptors.request.use((config) => {
      const token = Cookies.get("token");
      if (token) {
        config.headers.Authorization = `token ${token}`;
      }
      return config;
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/home");

    // try {
    //   const response = await axios.post(
    //     "http://127.0.0.1:8000/accounts/login/",
    //     {
    //       email,
    //       password: pass,
    //     }
    //   );
    //   // Extract token from response data
    //   Cookies.set("token", response.data.token, {
    //     secure: true,
    //     httpOnly: true,
    //   });
    //   navigate("/");
    // } catch (error) {
    //   console.error("Error:", error.message);
    //   // Implement proper error handling here
    // }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <img
              src={ashesicampus}
              alt="Ashesi Campus"
              style={{ width: "100%" }}
            />
            <div
              className="auth-form-container"
              style={{
                position: "absolute",
                padding: "30px",
                width: "500px",
                background: "rgba(255, 255, 255, 0.8)",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={ashesilogo}
                  alt="Ashesi Logo"
                  style={{
                    width: "220px",
                    margin: "20px",
                  }}
                />
                <h3 style={{ marginBottom: "30px", width: "350px" }}>
                  Ashesi Research Management Resource
                </h3>
              </div>

              <form
                className="login-form"
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                }}
              >
                <label htmlFor="email" style={{ textAlign: "left" }}>
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  name="email"
                  style={{
                    border: "none",
                    borderRadius: "5px",
                    borderBottom: "2px solid #AD3537",
                    outline: "none", // Optional: Remove the input focus border
                    marginBottom: "30px",
                    padding: "5px", // Optional: Add some padding
                  }}
                />
                <label htmlFor="password" style={{ textAlign: "left" }}>
                  Password
                </label>
                <input
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  type="password"
                  id="password"
                  name="password"
                  style={{
                    border: "none",
                    borderRadius: "5px",
                    borderBottom: "2px solid #AD3537",
                    outline: "none", // Optional: Remove the input focus border
                    marginBottom: "30px",
                    padding: "5px", // Optional: Add some padding
                  }}
                />

                <button
                  type="submit"
                  onClick={handleSubmit}
                  style={{
                    marginTop: "20px",
                    width: "30%",
                    color: "white",
                    background: "#AD3537",
                    borderRadius: "5px",
                    borderColor: "#AD3537",
                    marginLeft: "35%",
                  }}
                >
                  Login
                </button>
              </form>

              <div
                className="link-btn"
                onClick={() => props.onFormSwitch("login")}
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  textAlign: "center", // Centered the text
                }}
              >
                Don't have an account?
                <span>
                  <Link
                    to="/register"
                    style={{
                      marginLeft: "10px",
                      textDecoration: "none" /* Remove underline */,
                      color: "#0A66C2",
                      fontWeight: "inherit",
                    }}
                  >
                    Register here.
                  </Link>
                </span>
              </div>
            </div>
          </div>
        }
      />
      <Route
        path="/"
        element={
          <ProtectedHome navigate={navigate} token={Cookies.get("token")} />
        }
      />
    </Routes>
  );
};

export default Login;
