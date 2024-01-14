import React,{useEffect,useState} from "react";
import axios from "axios";
import HorizontalList from "./components/HorizontalList";
import HomeHeader from "./components/HomeHeader";
import Header from "./Header";
import VerticalList from "./components/VerticalList";
import sidebanner from "./components/icons/sidebanner.png";
import Notification from "./components/Notification";
import SubListCard from "./components/SubListCard";
import ApplytoProject from "./components/ApplytoProject";
import ashesilogoblank from "./components/icons/ashesiblanklogo.png"
import Cookies from "js-cookie";
import { useNavigate, Routes, Route } from "react-router-dom";
import moment from "moment";

const ExplorePage = () => {
  const [projects, setAllProjectsData] = useState({});
  const today = moment().format("Do MMM YYYY");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = Cookies.get("access");

        if (accessToken) {
          const response = await axios.get(
            "http://127.0.0.1:5173/api/project/get/",
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );

          if (response.status === 200) {
            const responseData = response.data;
            setAllProjectsData({});
            for (const project of responseData) {
              const responseProjectTeam = await axios.get(
                `http://127.0.0.1:5173/api/project/team/get/${project.id}/`,
                {
                  method: "GET",
                  headers: {
                    Authorization: `Bearer ${accessToken}`,
                  },
                }
              );

              if (responseProjectTeam.status === 200) {
                const teamData = responseProjectTeam.data;
                setAllProjectsData((prevProjects) => ({
                  ...prevProjects,
                  [project.id]: {
                    projectData: project,
                    teamData: teamData,
                  },
                }));
              } else {
                console.error(
                  `Failed to fetch team members for project ${project.id}:`,
                  responseProjectTeam.status
                );
              }
            }
          } else if (response.status === 401) {
            await handleTokenRefresh();
          } else {
            console.error(
              "Failed to fetch all projects data:",
              response.status
            );
          }
        } else {
          console.error("Access token not present");
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    };

    fetchData();
  }, []);

  // Access projects dictionary where each project has projectData and teamData
  console.log(projects);

  // Rest of your component code...

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

  const notificationElement = (
    <Notification
      title={"Onedrive Library"}
      text={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus eros eu vehicula interdum. Cras nec ultricies massa. Curabitur rutrum, diam id consequat consequat"
      }
      date={"11:23 - Aug 2023"}
    />
  );

  let notificationcontent = [
    notificationElement,
    notificationElement,
    notificationElement,
  ];

      const people = ["Clark Kent", "Superman", "Naruto Uzumaki"];
      const descr =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus eros eu vehicula interdum. Cras nec ultricies massa. Curabitur rutrum, diam id consequat consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus eros eu vehicula interdum. Cras nec ultricies massa. Curabitur rutrum, diam id consequat consequat";

        var allMilestoneTasks = [];

        if (projects) {
          for (const project of projects) {
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

        const milestoneElement = (
          <ApplytoProject
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
            People={people}
            description={descr}
            workhours={40}
          />
        );

      const content = [milestoneElement, milestoneElement, milestoneElement];
    
    
  return (
    <div>
      <Header
        Page={[
          // <HomeHeader />,
          <HorizontalList
            spacing={25}
            items={[
              <VerticalList
                spacing={20}
                items={[
                  <HomeHeader
                    title={"Explore Projects"}
                    date={today}
                    spacing={"25vw"}
                  />,
                  <VerticalList spacing={20} items={content} />,
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
                      paddingLeft: "1.2vw",
                      paddingRight: "1.2vw",
                      backgroundColor: "white",
                      borderRadius: "10px",
                    }}
                  />,
                  <SubListCard
                    items={notificationcontent}
                    title={"Notifications (3)"}
                    NoItemMessage={"You have no notifications"}
                  />,
                ]}
              />,
            ]}
          />,
        ]}
      />
    </div>
  );
};

export default ExplorePage;