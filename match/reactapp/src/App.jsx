import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./HomePage";
import ProjectPage from "./ProjectPage";
import ExplorePage from "./ExplorePage";
import React from "react";
import Login from "./Login";
import ProfilePage from "./ProfilePage";
import "react-datepicker/dist/react-datepicker.css";
import CreateProject from "./CreateProject";
import EditProfile from "./EditProfile";
import EditProject from "./EditProject";
import ExampleComponent from "./doodle";
import Test from "./Test";
import MemberRole from "./MemberRolePage";
import RAMilestonePage from "./RAMilestonePage";
import RFMilestonePage from "./RFMilestonePage";
import Register from "./Register";
import ExploreProjectPage from "./ExploreProjectPage";
import RATaskPage from "./RATaskPage";
import RFTaskPage from "./RFTaskPage";
import EditMilestone from "./EditMilestone";

function App() {
  return (
    <Router>
      <div className="app__body">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/createproject" element={<CreateProject />} />
          <Route path="/editproject" element={<EditProject />} />
          <Route path="/editmilestone" element={<EditMilestone />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/doodle" element={<ExampleComponent />} />
          <Route path="/Test" element={<Test />} />
          <Route path="/member_role" element={<MemberRole />} />
          <Route path="/ramilestone" element={<RAMilestonePage />} />
          <Route path="/rfmilestone" element={<RFMilestonePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/exploreproject" element={<ExploreProjectPage />} />
          <Route path="/ratask" element={<RATaskPage />} />
          <Route path="/rftask" element={<RFTaskPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
