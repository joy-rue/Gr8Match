import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import Login from "./Login";
import HomePage from "./HomePage";
import { AuthProvider } from './AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleFormSwitch = (formType) => {
    // Logic to switch between login and registration forms
    console.log("Switching to", formType);
  };

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="//*" element={showLoginForm ? <Login onFormSwitch={handleFormSwitch} /> : <HomePage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
