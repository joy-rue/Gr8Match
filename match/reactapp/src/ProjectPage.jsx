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
import { useNavigate, Routes, Route, Link } from "react-router-dom";
import editIcon from "./components/icons/editIcon.png";


const ProjectPage = () => {
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
                  <ListCard
                    items={appscontent}
                    title={"Apps"}
                    NoItemMessage={"You have no Apps"}
                  />,
                  <ListCard
                    items={milestonecontent}
                    title={"Milestone"}
                    NoItemMessage={"You have no milestones"}
                  />,
                  <ListCard
                    items={teammembers}
                    title={"Team"}
                    NoItemMessage={"You have no Tasks"}
                  />,
                  <ListCard
                    items={teamroles}
                    title={"Roles"}
                    NoItemMessage={"No team roles defined"}
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
