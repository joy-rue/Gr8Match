import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppsContent from "./components/AppsContent";
import Header from "./Header";
import ListCard from "./components/ListCard";
import ashesilogoblank from "./components/icons/ashesiblanklogo.png";
import sidebanner from "./components/icons/sidebanner.png";
import VerticalList from "./components/VerticalList";
import ProjectHeaderContent from "./components/ProjectHeaderContent";
import groupprofile from "./components/icons/groupprofile.jpg";
import ashesibanner from "./components/icons/campusbanner.png";
import MilestoneContent from "./components/MilestoneContent";
import ProjectMember from "./components/ProjectMember";
import HorizontalList from "./components/HorizontalList";
import SubListCard from "./components/SubListCard";
import Notification from "./components/Notification";
import Textbox from "./components/Textbox";
import { TeamEnrollment } from "./components/TeamEnrollment";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import editIcon from "./components/icons/editIcon.png";
import axios from "axios";
import { useParams } from "react-router-dom";
import moment from "moment";
import ModListCard from "./components/ModListCard";
import PopUpForm from "./components/PopUpForm";
import AddApp from "./components/AddApp";
import AddMilestone from "./components/AddMilestone";
import AddMemberRole from "./components/AddMemberRole";

const ProjectPage = () => {
  const { id } = useParams();
  const [projectData, setProjectData] = useState([]);
  const [start, setStart] = useState([]);
  const [end, setEnd] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [milestonesData, setMilestoneData] = useState([]);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const accessToken = Cookies.get('access');

        if (accessToken) {
          const response = await axios.get(`http://127.0.0.1:5173/api/project/get/${id}/`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          //obtain data on team members for given project
          const teamDataResponse = await axios.get(`http://127.0.0.1:5173/api/project/team/get/${id}/`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          if (response.status === 200) {
            const responseData = response.data;
            setProjectData(responseData);
            if (responseData) {
              setStart(
                responseData && responseData.start_date
                  ? moment(responseData.start_date).format(" Do MMM YYYY")
                  : "set date"
              );
              setEnd(
                responseData && responseData.end_date
                  ? moment(responseData.end_date).format(" Do MMM YYYY")
                  : "set date"
              );
              setMilestoneData(responseData.milestones);
            }
            console.log(responseData);
          } else if (response.status === 401) {
            // Token might be expired, attempt token refresh
            await handleTokenRefresh();
            // Retry the request after token refresh
            await fetchProjectData();
          } else {
            console.error('Failed to fetch project data:', response.status);
          }
          if (teamDataResponse.status === 200) {
            const teamDataResponseData = teamDataResponse.data;
            setTeamMembers(teamDataResponseData);

            console.log("0000000000 TEAM DATA HERE:", teamDataResponseData);
          } else if (teamDataResponse.status === 401) {
            // Token might be expired, attempt token refresh
            await handleTokenRefresh();
            // Retry the request after token refresh
            await fetchProjectData();
          } else {
            console.error('Failed to fetch project team members:', response.status);
          }
        } else {
          console.error('Access token not present');
        }
      } catch (error) {
        console.error('Error during fetch:', error);
      }
    };

    fetchProjectData();
  }, [id]);

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
  var allMilestoneTasks = [];

  if (projectData && milestonesData) {
    for (const oneMilestone of milestonesData) {
      for (const milestoneElement of oneMilestone.tasks) {
        let name = milestoneElement.name ? milestoneElement.name : "task";

        const newMilestoneContent = (
          <MilestoneContent
            key={milestoneElement.id}
            profile={ashesilogoblank}
            title={oneMilestone.milestone}
            dueDate={milestoneElement.due_date
              ? moment(milestoneElement.due_date).format("Do MMM YYYY")
              : "-- -- --"} 
              timeleft={
                milestoneElement.due_date
                  ? `${Math.ceil(
                    ((new Date(milestoneElement.due_date)) - new Date()) /
                    (1000 * 60 * 60 * 24 * 7)
                  )} wks`
                  : " 0 wks"
              }
            People={milestoneElement.assignee ? milestoneElement.assignee : ["assignment pending.."]}
            description={milestoneElement.description ? name + "    " + ": " + milestoneElement.description : name + " : "}
          />
        );

        allMilestoneTasks.push(newMilestoneContent);
        ;
      }
    }
  };

  // fetch from project in database: app name, app logo, app link
  const appsContent = [<AppsContent profile={ashesilogoblank} title={"Onedrive Library"} descr={"View team one drive folder for shared project files"} shared_link={"#"} />, <AppsContent profile={ashesilogoblank} title={"Onedrive Library"} descr={"View team one drive folder for shared project files"} shared_link={"#"} />];

  const [PopForm, setPopForm] = useState(null);
  const [PopUpOpen, setPopUpOpen] = useState(false);
  const [PopUpFormHeader, setPopUpFormHeader] = useState("");
  const navigate = useNavigate();

  const onSelectItem = () => {
    // Redirect to the project page after the component is rendered
    navigate("/member_role");

    // Your logic for selecting an item goes here
  };

  const OnPopUpClose = () => {
    setPopUpOpen(false);
  };

  const handleAppPopUpForm = () => {
    setPopUpOpen(true);
    setPopUpFormHeader("Add App");
    setPopForm(<AddApp handleAddApp={addApp} />);
  };

  const deleteApp = (checkedItems) => {
    console.log("delete App");
    console.log(`delete App: ${checkedItems}`);
  };

  const addApp = (App) => {
    console.log("add App");
    console.log(`add App: ${App}`);
    setPopUpOpen(false);
  };

  const handleMilestonePopUpForm = () => {
    setPopUpOpen(true);
    setPopUpFormHeader("Add Milestone");
    setPopForm(<AddMilestone handleAddMilestone={addMilestone} />);
  };

  const deleteMilestone = (checkedItems) => {
    console.log("delete Milestone");
    console.log(`delete Milestone: ${checkedItems}`);
  };

  const addMilestone = (Title, startDate, endDate, description, teamMember) => {
    console.log("add Milestone");
    console.log(`add Milestone: ${Title}`);
    console.log(`add Milestone: ${startDate}`);
    console.log(`add Milestone: ${endDate}`);
    console.log(`add Milestone: ${description}`);
    console.log(`add Milestone: ${teamMember}`);
    setPopUpOpen(false);
  };

  const handleMemberRolePopUpForm = () => {
    setPopUpOpen(true);
    setPopUpFormHeader("Add Member Role");
    setPopForm(<AddMemberRole handleAddMemberRole={addMemberRole} />);
  };

  const deleteMemberRole = (checkedItems) => {
    console.log("delete MemberRole");
    console.log(`delete MemberRole: ${checkedItems}`);
  };

  const addMemberRole = (MemberRole) => {
    console.log("add MemberRole");
    console.log(`add MemberRole: ${MemberRole}`);
    setPopUpOpen(false);
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
    <ProjectMember
      Name={"Naruto Uzumaki"}
      role={"Research Assistant"}
      active={true}
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

  const notificationcontent = [
    notificationElement,
    notificationElement,
    notificationElement,
  ];

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

  const teamroles = ["Faculty", "Research Assistant 1", "Research Assistant 2"];

  return (
    <div>
      <PopUpForm
        isOpen={PopUpOpen}
        title={PopUpFormHeader}
        PopUpForm={PopForm}
        onClose={OnPopUpClose}
      />
      <Header
        Page={
          <HorizontalList
            spacing={20}
            items={[
              <VerticalList
                spacing={20}
                items={[
                  <ProjectHeaderContent
                    Duration={`${start} - ${end}`}
                    TimeLeft={
                      projectData &&
                        projectData.start_date &&
                        projectData.end_date
                        ? `${Math.ceil(
                          (new Date(projectData.end_date) - new Date(projectData.start_date)) / (1000 * 60 * 60 * 24 * 7)
                        )} wks` : " 0 wks"
                    }
                    Description={
                      projectData
                        ? projectData.description
                        : "No project Description"
                    }
                    profile={groupprofile}
                    Date={moment().format(' Do MMM YYYY')}
                    title={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div style={{ maxWidth: "90%" }}>
                          {projectData ? projectData.title : "No Title"}
                        </div>
                        <Link to={`/editproject/${id}`} >
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
                    Progress={24}
                    banner={ashesibanner}
                  />,
                  <ModListCard
                    items={appsContent}
                    title={"Apps"}
                    NoItemMessage={"You have no Apps"}
                    handleAddOperation={addApp}
                    handleDeleteOperation={deleteApp}
                    handleAddIconClick={handleAppPopUpForm}
                  />,
                  <ModListCard
                    items={allMilestoneTasks}
                    title={"Milestone"}
                    NoItemMessage={"You have no milestones"}
                    handleAddOperation={addMilestone}
                    handleDeleteOperation={deleteMilestone}
                    handleAddIconClick={handleMilestonePopUpForm}
                  />,
                  <ListCard
                    items={teamMembers.map(member => member.user)}
                    title={"Team"}
                    NoItemMessage={"You have no Tasks"}
                  />,
                  <ModListCard
                    items={teamroles}
                    title={"Roles"}
                    NoItemMessage={"No team roles defined"}
                    handleAddOperation={addMemberRole}
                    handleDeleteOperation={deleteMemberRole}
                    handleAddIconClick={handleMemberRolePopUpForm}
                    onSelectItem={onSelectItem}
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
                    items={notificationcontent}
                    title={"Notifications (3)"}
                    NoItemMessage={"You have no notifications"}
                  />,
                  <SubListCard
                    items={commentcontent}
                    title={"Comments"}
                    NoItemMessage={"No comments have been made"}
                    footer={<Textbox />}
                  />,
                  <SubListCard
                    items={enrollmentlist}
                    title={"Team Enrollment Requests"}
                    NoItemMessage={"No enrollment requests placed"}
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

export default ProjectPage;
