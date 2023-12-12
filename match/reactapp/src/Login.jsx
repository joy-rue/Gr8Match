import React, { useState } from "react";
import axios from 'axios';
import ashesicampus from "./components/icons/ashesicampus.jpg";
import ashesilogo from "./components/icons/ashesilogo.png";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    try {
          const response = await axios.post('http://your-django-api-endpoint/login/', {
            username,
            password,
          });

          // Handle the response (e.g., update state, show success message, etc.)
          console.log(response.data);
        } catch (error) {
          console.error('Error:', error.message);
        }
      };


  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img src={ashesicampus} alt="Ashesi Campus" style={{ width: "100%" }} />
      <div
        className="auth-form-container"
        style={{
          position: "absolute",
          padding: "20px",
          width: "400px",
          background: "rgba(255, 255, 255, 0.636)",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <img
            src={ashesilogo}
            alt="Ashesi Logo"
            style={{
              width: "50%",
              margin: "20px",
            }}
          />
          <h4 style={{ marginBottom: "30px", textAlign: "left" }}>Login</h4>
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
              marginBottom: "10px",
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
              marginBottom: "10px",
            }}
          />

          <button
            type="submit"
            style={{
              marginTop: "20px",
              width: "30%",
              color: "white",
              background: "#AD3537",
              borderRadius: "5px",
              borderColor: "#AD3537",
              marginLeft: "35%", // Adjusted margin to center the button
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
          Don't have an account? Register here.
        </div>
      </div>
    </div>
  );
};

export default Login;
