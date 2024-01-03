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
import ProfileHeaderContent from "./components/ProfileheaderContent";
import ProfileHeader from "./components/ProfileHeader";
import myprofile from "./components/icons/myprofile.png";
import WorKExperience from "./components/WorkExperience";
import EducationCard from "./components/EducationCard";
import SearchBox from "./components/SearchBox";
import ProfileTab from "./components/ProfileTab";

const ProfilePage = () => {
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

  let teammembers = [];

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

  const teamroles = ["Faculty", "Research Assistant 1", "Research Assistant 2"];

  const WorkExperienceitem = (
    <WorKExperience
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

  const EducationContent = [];

  const WorkExperiencecontent = [];

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
                        Department={"Computer Science"}
                        workhours={40}
                        Description={
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus eros eu vehicula interdum. "
                        }
                        contact={"+233206252066"}
                        email={"joseph.dzagli@ashesi.edu.gh"}
                      />
                    }
                    profile={myprofile}
                    Date={"12 Aug 2023"}
                    title={"Kelvin Kofi Doe"}
                    banner={ashesibanner}
                  />,

                  <ListCard
                    items={WorkExperiencecontent}
                    title={"Work Experience"}
                    NoItemMessage={"You have no work experience"}
                  />,
                  <ListCard
                    items={EducationContent}
                    title={"Education"}
                    NoItemMessage={"You have no education"}
                  />,
                  <ListCard
                    items={[]}
                    title={"Skills"}
                    NoItemMessage={"You have no skills"}
                  />,
                  <ListCard
                    items={[]}
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
                    items={notificationcontent}
                    title={"Notifications (3)"}
                    NoItemMessage={"You have no notifications"}
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
                  //   <SubListCard
                  //     items={enrollmentlist}
                  //     title={"Team Enrollment Requests"}
                  //     NoItemMessage={"No enrollment requests placed"}
                  //   />,
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
