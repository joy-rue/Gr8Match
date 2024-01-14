import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./HomePage";
import ProjectPage from "./ProjectPage";
import ExplorePage from "./ExplorePage";
import React, { useState } from "react";
import Login from "./Login";
import ProfilePage from "./ProfilePage";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import  CreateProject from "./CreateProject";
import EditProfile from "./EditProfile";
import EditProject from "./EditProject";


function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <BrowserRouter>
      <div className="app__body">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/createproject" element={<CreateProject />} />
          <Route path="/editproject" element={<EditProject />} />
          <Route path="/editprofile" element={<EditProfile />} />

          {/* Add other routes as needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
