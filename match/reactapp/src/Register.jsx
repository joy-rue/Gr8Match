import React, { useState } from "react";
import ashesicampus from "./components/icons/ashesicampus.jpg";
import ashesilogo from "./components/icons/ashesilogo.png";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
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
          <h4 style={{ marginBottom: "30px", textAlign: "left" }}>Register</h4>
        </div>
        <form
          className="Register-form"
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
          }}
        >
          <label htmlFor="email" style={{ textAlign: "left" }}>
            Full Name
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="name"
            id="name"
            name="name"
            style={{
              marginBottom: "10px",
            }}/>
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
            Register
          </button>
        </form>
        <div
          className="link-btn"
          onClick={() => props.onFormSwitch("Register")}
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            textAlign: "center", // Centered the text
          }}
        >
          Already have an account? Login here.
        </div>
      </div>
    </div>
  );
};

export default Register;
