// HomePageWrapper.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import Cookies from "js-cookie";

const HomePageWrapper = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");

  useEffect(() => {
    if (!token) {
      // Redirect to the login page if no token is detected
      navigate("/Login");
    }
  }, [token, navigate]);

  return <HomePage />;
};

export default HomePageWrapper;
