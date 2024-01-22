import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import RFHomePage from "./RFHomePage";
import RFProjectPage from "./RFProjectPage";
import ExplorePage from "./ExplorePage";
import React from "react";
import Login from "./LoginPage";
import AuthProfilePage from "./AuthProfilePage";
import "react-datepicker/dist/react-datepicker.css";
import CreateProject from "./CreateProjectPage";
import EditProfile from "./EditProfilePage";
import EditProject from "./EditProjectPage";
import Test from "./Test";
import RFMemberRole from "./RFMemberRolePage";
import RAMilestonePage from "./RAMilestonePage";
import RFMilestonePage from "./RFMilestonePage";
import Register from "./RegisterPage";
import ExploreProjectPage from "./ExploreProjectPage";
import RATaskPage from "./RATaskPage";
import RFTaskPage from "./RFTaskPage";
import EditMilestone from "./EditMilestonePage";
import RAMemberRole from "./RAMemberRolePage";
import RAProjectPage from "./RAProjectPage";
import RAHomePage from "./RAHomepage";
import ProfilePage from "./ProfilePage";
import PageNotFound from "./PageNotFound";

const USER_TYPES = {
  RESEARCH_ASSOCIATE: "associate",
  RESEARCH_FACULTY: "faculty",
  ADMINISTRATOR: "admin",
};

const CURRENT_USER_TYPE = USER_TYPES.RESEARCH_FACULTY;
const CURRENT_USER_EMAIL = "joseph.dzagli@ashesi.edu.gh";
const Profile_Email = "joseph.dzagli@ashesi.edu.gh";

// Research Faculty pages are prefixed by RF 
// Research Associate pages are prefixed by RA

function App() {
  return (
    <Router>
      <div className="app__body">
        <Routes>
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/" element={<Login />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/Test" element={<Test />} />
          <Route path="/register" element={<Register />} />
          <Route path="/exploreproject" element={<ExploreProjectPage />} />
          <Route path="/*" element={<PageNotFound />} />
          <Route
            path="/createproject"
            element={
              CURRENT_USER_TYPE === USER_TYPES.RESEARCH_FACULTY ? (
                <CreateProject />
              ) : (
                <RAHomePage />
              )
            }
          />
          <Route
            path="/editproject"
            element={
              CURRENT_USER_TYPE === USER_TYPES.RESEARCH_FACULTY ? (
                <EditProject />
              ) : (
                <RAProjectPage />
              )
            }
          />
          <Route
            path="/editmilestone"
            element={
              CURRENT_USER_TYPE === USER_TYPES.RESEARCH_FACULTY ? (
                <EditMilestone />
              ) : (
                <RAProjectPage />
              )
            }
          />
          <Route
            path="/profile"
            element={
              CURRENT_USER_EMAIL === Profile_Email ? (
                <AuthProfilePage />
              ) : (
                <ProfilePage />
              )
            }
          />
          <Route
            path="/home"
            element={
              CURRENT_USER_TYPE === USER_TYPES.RESEARCH_FACULTY ? (
                <RFHomePage />
              ) : (
                <RAHomePage />
              )
            }
          />
          <Route
            path="/project"
            element={
              CURRENT_USER_TYPE === USER_TYPES.RESEARCH_FACULTY ? (
                <RFProjectPage />
              ) : (
                <RAProjectPage />
              )
            }
          />
          <Route
            path="/memberrole"
            element={
              CURRENT_USER_TYPE === USER_TYPES.RESEARCH_FACULTY ? (
                <RFMemberRole />
              ) : (
                <RAMemberRole />
              )
            }
          />
          <Route
            path="/milestone"
            element={
              CURRENT_USER_TYPE === USER_TYPES.RESEARCH_FACULTY ? (
                <RFMilestonePage />
              ) : (
                <RAMilestonePage />
              )
            }
          />
          <Route
            path="/task"
            element={
              CURRENT_USER_TYPE === USER_TYPES.RESEARCH_FACULTY ? (
                <RFTaskPage />
              ) : (
                <RATaskPage />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
