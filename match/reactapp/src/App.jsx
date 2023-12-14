import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./HomePage";
import ProjectPage from "./ProjectPage";
import ExplorePage from "./ExplorePage";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <div className="app__body">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/project" element={<ProjectPage />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
