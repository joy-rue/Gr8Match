import React, { useState, useEffect } from "react";
import axios from "axios";
import ashesicampus from "./components/icons/ashesicampus.jpg";
import ashesilogo from "./components/icons/ashesilogo.png";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import HorizontalList from "./components/HorizontalList";

const Register = (props) => {
  const [Email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [name, setName] = useState("");
  const [ProfileName, setProfileName] = useState("");
  const [Department, setDepartment] = useState("");
  const [Phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleProfileNameChange = (e) => {
    setProfileName(e.target.value);
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPass(e.target.value);
    setPasswordMismatch(false); // Reset password mismatch error when typing
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPass(e.target.value);
    setPasswordMismatch(false); // Reset password mismatch error when typing
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (pass !== confirmPass) {
      setPasswordMismatch(true);
      return; // Don't proceed with the registration if passwords don't match
    }

    // Perform registration logic here
    console.log("Registration logic goes here");
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
          padding: "30px",
          width: "890px",
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
          <h4 style={{ marginBottom: "30px", textAlign: "left" }}>
            Ashesi Research Management Resource
          </h4>
        </div>
        <form
          onSubmit={handleSubmit}
          style={{
            borderRadius: "10px",
          }}
        >
          {" "}
          <HorizontalList
            items={[
              <input
                type="text"
                placeholder="Email"
                value={Email}
                onChange={handleEmailChange}
                required
                style={{
                  border: "none",
                  borderRadius: "5px",
                  borderBottom: "2px solid #AD3537",
                  outline: "none", // Optional: Remove the input focus border
                  width: "300px", // Optional: Make the input full-width
                  marginBottom: "30px",
                  marginRight: "20px",
                  padding: "5px", // Optional: Add some padding
                }}
              />,
              <input
                value={pass}
                onChange={handlePasswordChange}
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                style={{
                  border: "none",
                  borderRadius: "5px",
                  borderBottom: "2px solid #AD3537",
                  outline: "none", // Optional: Remove the input focus border
                  marginBottom: "30px",
                  marginRight: "20px",
                  padding: "5px", // Optional: Add some padding
                  width: "245px",
                }}
              />,
              <input
                value={confirmPass}
                onChange={handleConfirmPasswordChange}
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                style={{
                  border: "none",
                  borderRadius: "5px",
                  borderBottom: "2px solid #AD3537",
                  outline: "none", // Optional: Remove the input focus border
                  marginRight: "20px",
                  marginBottom: "30px",
                  padding: "5px", // Optional: Add some padding
                  width: "245px",
                }}
              />,
            ]}
          />
          <HorizontalList
            items={[
              <input
                type="text"
                placeholder="Full Name"
                value={ProfileName}
                onChange={handleProfileNameChange}
                required
                style={{
                  border: "none",
                  borderBottom: "2px solid #AD3537",
                  borderRadius: "5px",
                  outline: "none", // Optional: Remove the input focus border
                  width: "350px", // Optional: Make the input full-width
                  marginBottom: "30px",
                  marginRight: "20px",
                  padding: "5px", // Optional: Add some padding
                }}
              />,
              <input
                type="text"
                placeholder="Phone"
                value={Phone}
                onChange={handlePhoneChange}
                required
                style={{
                  border: "none",
                  borderRadius: "5px",
                  borderBottom: "2px solid #AD3537",
                  outline: "none", // Optional: Remove the input focus border
                  width: "150px", // Optional: Make the input full-width
                  marginRight: "20px",
                  marginBottom: "30px",
                  padding: "5px", // Optional: Add some padding
                }}
              />,

              <input
                type="text"
                placeholder="Department"
                value={Department}
                onChange={handleDepartmentChange}
                required
                style={{
                  border: "none",
                  borderRadius: "5px",
                  borderBottom: "2px solid #AD3537",
                  outline: "none", // Optional: Remove the input focus border
                  width: "290px", // Optional: Make the input full-width
                  marginBottom: "30px",
                  padding: "5px", // Optional: Add some padding
                }}
              />,
            ]}
          />
          <textarea
            value={description}
            placeholder="Profile Bio - 50 words max"
            onChange={handleDescriptionChange}
            required
            style={{
              borderRadius: "5px",
              borderBottom: "2px solid #AD3537",
              height: "100px",
              outline: "none", // Optional: Remove the input focus border
              width: "100%", // Optional: Make the input full-width
              marginBottom: "30px",
              padding: "5px", // Optional: Add some padding
            }}
          />
          <label htmlFor="dropdown">Select Account Type:</label>
          <select
            id="dropdown"
            value={selectedOption}
            onChange={handleDropdownChange}
            style={{
              border: "none",
              borderBottom: "2px solid #AD3537",
              borderRadius: "5px",
              outline: "none", // Optional: Remove the input focus border
              width: "350px", // Optional: Make the input full-width
              marginBottom: "30px",
              marginRight: "20px",
              marginLeft: "10px",
              padding: "5px", // Optional: Add some padding
            }}
          >
            {/* <option value="">Account</option> */}
            <option value="associate">Research Associate</option>
            <option value="faculty">Research Faculty</option>
            <option value="admin">Administrator</option>
          </select>
          {passwordMismatch && (
            <div style={{ color: "red", margin: "10px" }}>
              Passwords do not match.
            </div>
          )}
          <button
            type="submit"
            style={{
              display: "block",
              margin: "0 auto", // Center horizontally
              cursor: "pointer",
              outline: "none",
              textDecoration: "none",
              border: "none",
              color: "white",
              backgroundColor: "#AD3537",
              padding: "8px",
              width: "150px",
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
          Already have an account?{" "}
          <span>
            <Link
              to="/"
              style={{
                marginLeft: "10px",
                textDecoration: "none" /* Remove underline */,
                color: "#0A66C2",
                fontWeight: "inherit",
              }}
            >
              Login here.
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
