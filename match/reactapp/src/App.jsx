import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import RFHomePage from "./RFHomePage";
import RFProjectPage from "./RFProjectPage";
import ExplorePage from "./ExplorePage";
import React from "react";
import Login from "./Login";
import AuthProfilePage from "./AuthProfilePage";
import "react-datepicker/dist/react-datepicker.css";
import CreateProject from "./CreateProject";
import EditProfile from "./EditProfile";
import EditProject from "./EditProject";
import Test from "./Test";
import RFMemberRole from "./RFMemberRolePage";
import RAMilestonePage from "./RAMilestonePage";
import RFMilestonePage from "./RFMilestonePage";
import Register from "./Register";
import ExploreProjectPage from "./ExploreProjectPage";
import RATaskPage from "./RATaskPage";
import RFTaskPage from "./RFTaskPage";
import EditMilestone from "./EditMilestone";
import RAMemberRole from "./RAMemberRole";
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
const CURRENT_USER_EMAIL = "Kenneth.adaglo@ashesi.edu.gh";
const Profile_Email = "joseph.dzagli@ashesi.edu.gh";

function App() {
  return (
    <Router>
      <div className="app__body">
        <Routes>
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/" element={<Login />} />
          <Route path="/createproject" element={<CreateProject />} />
          <Route path="/editproject" element={<EditProject />} />
          <Route path="/editmilestone" element={<EditMilestone />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/Test" element={<Test />} />
          <Route path="/register" element={<Register />} />
          <Route path="/exploreproject" element={<ExploreProjectPage />} />
          <Route path="/*" element={<PageNotFound />} />

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
