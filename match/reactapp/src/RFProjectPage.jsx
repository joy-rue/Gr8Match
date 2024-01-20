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
import { TeamEnrollment } from "./components/TeamEnrollment";
import { Link, useNavigate } from "react-router-dom";
import editIcon from "./components/icons/editIcon.png";
import ModListCard from "./components/ModListCard";
import PopUpForm from "./components/PopUpForm";
import React, { useState, useEffect } from "react";
import AddApp from "./components/AddApp";
import AddMilestone from "./components/AddMilestone";
import AddMemberRole from "./components/AddMemberRole";

const ProjectPage = () => {
  const [PopForm, setPopForm] = useState(null);
  const [PopUpOpen, setPopUpOpen] = useState(false);
  const [PopUpFormHeader, setPopUpFormHeader] = useState("");
  const navigate = useNavigate();
 
  const viewMemberRole = () => {
    navigate("/memberrole");
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
      title={"Ashesi Instructure"}
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
                    Duration={"Aug 2023 - Jun 2024"}
                    TimeLeft={"1yr 3months"}
                    Description={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibuseros eu vicula interdum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibuseros eu vehicula interdum."
                    }
                    profile={groupprofile}
                    Date={"12 Aug 2023"}
                    title={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div style={{ maxWidth: "90%" }}>
                          {
                            "Ghana Economic Index Study for people with special abilities "
                          }
                        </div>
                        <Link to="/editproject">
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
                    items={appscontent}
                    title={"Apps"}
                    NoItemMessage={"You have no Apps"}
                    handleAddOperation={addApp}
                    handleDeleteOperation={deleteApp}
                    handleAddIconClick={handleAppPopUpForm}
                  />,
                  <ModListCard
                    items={milestonecontent}
                    title={"Milestone"}
                    NoItemMessage={"You have no milestones"}
                    handleAddOperation={addMilestone}
                    handleDeleteOperation={deleteMilestone}
                    handleAddIconClick={handleMilestonePopUpForm}
                  />,
                  <ListCard
                    items={teammembers}
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
                    onSelectItem={viewMemberRole}
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
