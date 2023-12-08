import React, { useState } from "react";
import ashesicampus from "./assets/Ashesicampus.jpg";
import { grey } from "@material-ui/core/colors";

export const Register = (props: { onFormSwitch: (arg0: string) => void }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(email);
    // Perform registration logic here
  };

  return (
    <div style={{ position: "relative" }}>
      <img src={ashesicampus} alt="Ashesi Campus" style={{ width: "100%" }} />
      <div
        className="auth-form-container"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: "20px",
          width: "400px",
          // height: `calc(400px * ${1 / 2 / 9})`, // Calculate height based on the aspect ratio
          background: "rgba(255, 255, 255, 0.636)",
          borderRadius: "10px",
        }}
      >
        <h2>Register</h2>
        <form
          className="register-form"
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label htmlFor="name">Full name</label>
          <input
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            id="name"
            // placeholder="Full Name"
          />
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            // placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <label htmlFor="password">Password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            // placeholder="********"
            id="password"
            name="password"
          />
          <button
            type="submit"
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              width: "30%",
              color: "white",
              background: "#AD3537",
              borderRadius: "5px",
              borderColor: "#AD3537",
            }}
          >
            Register
          </button>
        </form>
        <div
          className="link-btn"
          onClick={() => props.onFormSwitch("login")}
          style={{ marginTop: "20px" }}
        >
          Already have an account? Login here.
        </div>
      </div>
    </div>
  );
};
