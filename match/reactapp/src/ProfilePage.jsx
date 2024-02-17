import "bootstrap/dist/css/bootstrap.min.css";
import AppsContent from "./components/AppsContent";
import Header from "./components/Header";
import ListCard from "./components/ListCard";
import ashesilogoblank from "./components/icons/ashesiblanklogo.png";
import sidebanner from "./components/icons/sidebanner.png";
import VerticalList from "./components/VerticalList";
import ashesibanner from "./components/icons/campusbanner.png";
import MilestoneContent from "./components/MilestoneContent";
import HorizontalList from "./components/HorizontalList";
import SubListCard from "./components/SubListCard";
import Notification from "./components/Notification";
import { TeamEnrollment } from "./components/TeamEnrollment";
import ProfileHeaderContent from "./components/ProfileheaderContent";
import ProfileHeader from "./components/ProfileHeader";
import myprofile from "./components/icons/myprofile.png";
import WorkExperience from "./components/WorkExperience";
import EducationCard from "./components/EducationCard";
import SearchBox from "./components/SearchBox";
import ProfileTab from "./components/ProfileTab";
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import AddWorkExperience from "./components/AddWorkExperience";
import ModListCard from "./components/ModListCard";
import PopUpForm from "./components/PopUpForm";
import AddEducation from "./components/AddEducation";
import AddSkill from "./components/AddSkill";
import AddInterest from "./components/AddInterest";
import Cookies from "js-cookie";
import axios from "axios";

const ProfilePage = () => {
  const [PopForm, setPopForm] = useState(null);
  const [PopUpOpen, setPopUpOpen] = useState(false);
  const [PopUpFormHeader, setPopUpFormHeader] = useState("");
  const {id} = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        console.log(id);
        const accessToken = Cookies.get("access");

        // Check if the access token is present
        if (accessToken) {
          // Fetch user profile data
          const userProfileResponse = await axios.get(
            `http://127.0.0.1:5173/api/profile/get/${id}/`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );

          if (userProfileResponse.status === 200) {
            setUserData(userProfileResponse.data);
          } else if (userProfileResponse.status === 401) {
            await handleTokenRefresh();
          } else {
            console.error(
              "Failed to fetch user profile data:",
              userProfileResponse.status
            );
          }
        } else {
          console.error("Access token not present");
        }
      } catch (error) {
        console.error("Error fetching user profile data:", error);
      }
    };

    fetchUserProfile();
  }, []); 


  const userList = userData;
 

  const handleTokenRefresh = async () => {
    try {
      // Make a request to your backend to refresh the access token using the refresh token
      const refreshResponse = await axios.post(
        "http://127.0.0.1:5173/api/account/refresh/",
        {
          refresh: Cookies.get("refresh"),
        }
      );

      const newAccessToken = refreshResponse.data.access;

      // Update the access token in cookies
      Cookies.set("access", newAccessToken);

      // Retry the original API request with the new access token
      await fetchData();
    } catch (error) {
      console.error("Error refreshing token:", error);
    }
  };

  const appsElement = (
    <AppsContent
      profile={ashesilogoblank}
      title={"Onedrive Library"}
      descr={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus eros eu vehicula interdum. Cras nec ultricies massa. Curabitur rutrum, diam id consequat consequat"
      }
    />
  );

  const appscontent = [appsElement, appsElement, appsElement];

  const milestoneElement = (
    <MilestoneContent
      profile={ashesilogoblank}
      title={"Participant Sampling"}
      dueDate={"20th August 2023"}
      timeleft={"2wks"}
      People={["Clark Kent", "Superman", "Naruto Uzumaki"]}
      description={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus eros eu vehicula interdum. Cras nec ultricies massa. Curabitur rutrum, diam id consequat consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus eros eu vehicula interdum. Cras nec ultricies massa. Curabitur rutrum, diam id consequat consequat"
      }
    />
  );

  const milestonecontent = [
    milestoneElement,
    milestoneElement,
    milestoneElement,
  ];

  const TaskCon = (
    <ProfileTab
      Name={"Naruto Uzumaki"}
      role={"Research Assistant"}
      profile={ashesilogoblank}
    />
  );

  let teammembers = [TaskCon, TaskCon, TaskCon];

  const content = [milestoneElement, milestoneElement, milestoneElement];

  const notificationElement = (
    <Notification
      title={"Onedrive Library"}
      text={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus eros eu vehicula interdum. Cras nec ultricies massa. Curabitur rutrum, diam id consequat consequat"
      }
      date={"11:23 - Aug 2023"}
    />
  );

  const notificationcontent = [];

  const commentElement = (
    <Notification
      title={"Itachi Uchiha"}
      text={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus eros eu vehicula interdum. Cras nec ultricies massa. Curabitur rutrum, diam id consequat consequat"
      }
      date={"11:23 - Aug 2023"}
    />
  );

  const commentcontent = [commentElement, commentElement, commentElement];

  const enrollmentrequests = (
    <TeamEnrollment
      Name={"Naruto Uzumaki"}
      Role={"Research Assistant"}
      // active={false}
      Profile={ashesilogoblank}
    />
  );

  const enrollmentlist = [
    enrollmentrequests,
    enrollmentrequests,
    enrollmentrequests,
  ];

  const teamroles = [
    "Faculty",
    "Research Assistant  1",
    "Research Assistant 2",
  ];

  const WorkExperienceitem = (
    <WorkExperience
      active={true}
      profile={ashesilogoblank}
      title={"Participant Sampling"}
      dueDate={"20th August 2023"}
      timeleft={"2wks"}
      People={["Clark Kent", "Superman", "Naruto Uzumaki"]}
      description={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus eros eu vehicula interdum. Cras nec ultricies massa. Curabitur rutrum, diam id consequat consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus eros eu vehicula interdum. Cras nec ultricies massa. Curabitur rutrum, diam id consequat consequat"
      }
      workhours={40}
    />
  );

  const EducationCon = (
    <EducationCard
      Institution={"Ashesi University"}
      profile={ashesilogoblank}
      Award={"Bsc. Computer Science"}
      Date={"20 Aug 2023"}
    />
  );

  const EducationContent = [EducationCon, EducationCon, EducationCon];

  const WorkExperiencecontent = [
    WorkExperienceitem,
    WorkExperienceitem,
    WorkExperienceitem,
  ];

  return (
    <div>
      <Header
        Page={
          <HorizontalList
            spacing={20}
            items={[
              <VerticalList
                spacing={20}
                items={[
                  <ProfileHeader
                    Description={
                      <ProfileHeaderContent
                        Department={userData?.study_area || "---"}
                        workhours={userData?.availability || 40}
                        Description={userData?.bio || ""}
                        contact={userData?.mobile_number || ""}
                        email={userData?.email || ""}
                      />
                    }
                    profile={userData?.profile_picture || myprofile}
                    Date={userData?.last_login || ""}
                    title={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>{`${userData?.firstname} ${userData?.lastname}`}</div>
                        <Link to={`/editprofile`} state={userList} >

                          <img
                            src={editIcon}
                            alt=""
                            style={{
                              width: "28px",
                              marginRight: "20px",
                              transform: "translateY(-10px)",
                            }}
                          />
                        </Link>
                      </div>
                    }
                    banner={ashesibanner}
                  />,

                  <ModListCard
                    items={userData?.writing_samples?.map((sample)=>{sample.title}) || []}
                    title={"Work Experience"}
                    NoItemMessage={"You have no work experience"}
                  />,
                  <ModListCard
                    items={ userData?.degrees?.map((degree)=>degree) || []}
                    title={"Education"}
                    NoItemMessage={"You have no education"}
                  />,
                  <ModListCard
                    items={userData?.interests?.map((interest)=>{interest}) || []}
                    title={"Skill"}
                    NoItemMessage={"You have no skill"}
                    handleAddOperation={addSkill}
                    handleDeleteOperation={deleteSkill} 
                    handleAddIconClick={handleSkillPopUpForm}
                  />,
                  <ModListCard
                    items={userData?.interests?.map((interest)=>{interest}) || []}
                    title={"Interests"}
                    NoItemMessage={"You have no interests"}
                  />,
                ]}
              />,

              <VerticalList
                spacing={20}
                items={[
                  <img
                    src={sidebanner}
                    alt=""
                    style={{
                      width: "25vw",
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      backgroundColor: "white",
                      borderRadius: "10px",
                    }}
                  />,

                  <SubListCard
                    items={teammembers}
                    title={
                      <VerticalList
                        spacing={10}
                        items={[
                          <div>People you may know</div>,
                          <div>
                            <SearchBox />
                          </div>,
                        ]}
                      />
                    }
                    NoItemMessage={"No profiles found"}
                  />,
                  <SubListCard
                    items={notificationcontent}
                    title={"Notifications (3)"}
                    NoItemMessage={"You have no notifications"}
                  />,
                ]}
              />,
            ]}
          />
        }
      />
    </div>
  );
};

export default ProfilePage;
