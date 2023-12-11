import React, { useState } from "react";
import ashesicampus from "./assets/Ashesicampus.jpg";
import ashesilogo from "./assets/ashesilogo.png";

export const Login = (props: { onFormSwitch: (arg0: string) => void }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(email);
    // Perform registration logic here
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
          //   textAlign: "center",
        }}
      >
        <img
          src={ashesilogo}
          alt="Ashesi Logo"
          style={{
            width: "50%",
            display: "flex",
            margin: "20px",
            marginLeft: "80px",
          }}
        />
        <h4
          style={{
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          Login
        </h4>
        <form
          className="login-form"
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "10px",
          }}
        >
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            // placeholder="youremail@gmail.com"
            id="email"
            name="email"
            style={{
              marginBottom: "10px",
            }}
          />
          <label htmlFor="password">Password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            // placeholder="********"
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
              marginLeft: "120px",
            }}
          >
            Login
          </button>
        </form>
        <div
          className="link-btn"
          onClick={() => props.onFormSwitch("login")}
          style={{ marginLeft: "40px", marginBottom: "20px" }}
        >
          Don't have an account? Register here.
        </div>
      </div>
    </div>
  );
};

export default Login;
