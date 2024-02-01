import React, { useEffect, useState } from "react";
import axios from "axios";
import HorizontalList from "./components/HorizontalList";
import HomeHeader from "./components/HomeHeader";
import Header from "./components/Header";
import VerticalList from "./components/VerticalList";
import sidebanner from "./components/icons/sidebanner.png";
import Notification from "./components/Notification";
import SubListCard from "./components/SubListCard";
import ApplytoProject from "./components/ApplytoProject";
import ashesilogoblank from "./components/icons/ashesiblanklogo.png";
import Cookies from "js-cookie";
import moment from "moment";
import { useParams } from "react-router-dom";

const ExplorePage = () => {
  const [projects, setAllProjectsData] = useState({});
  const today = moment().format("Do MMM YYYY");
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = Cookies.get("access");

        if (accessToken) {
          const response = await axios.get(
            "http://127.0.0.1:5173/api/project/get/public/",
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
              setAllProjectsData((prevProjects) => ({
                ...prevProjects,
                [project.id]: {
                  projectData: project,
                },
              }));

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
<<<<<<< HEAD
                console.log(teamData)
                  ; setAllProjectsData((prevProjects) => ({
                    ...prevProjects,
                    [project.id]: {
                      projectData: project,
                      teamData: teamData,
                    },
                  }));
                console.log(projects, "data here:")
=======
                console.log(teamData);
                setAllProjectsData((prevProjects) => ({
                  ...prevProjects,
                  [project.id]: {
                    projectData: project,
                    teamData: teamData,
                  },
                }));
                console.log(projects, "data here:");
>>>>>>> fa9007de822d3fd50ac08af696e85c7cb86ab5a1
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
<<<<<<< HEAD


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

  var allProjects = [];

  if (projects) {
    Object.keys(projects).some(projectKey => {
      const project = projects[projectKey];
  
      // Access the teamData for the current project
      const teamData = project.teamData;
  
      var is_member = Object.keys(project.projectData.team_members).some(memberKey => {
        const member = project.projectData.team_members[memberKey];
        return member.id === id;
      });
      console.log(project.projectData.id);
  
      if (is_member) {
        return true; // Skip to the next project
      }
      const projectallProjects = (

        <ApplytoProject
          id={project.projectData.id}
          profile={ashesilogoblank}
          title={project.projectData.title}
          dueDate={project.projectData.start_date
            ? moment(project.projectData.start_date).format("Do MMM YYYY") + "-" + moment(project.projectData.end_date).format("Do MMM YYYY")
            : "-- -- --"}
          workhours={project.projectData.estimated_project_hours ? project.projectData.estimated_project_hours : "0"
          }
          People={project.projectData.user ? project.projectData.user : ["assignment pending.."]}
          description={project.projectData.description ? project.projectData.description : " "}
=======

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

  var allProjects = [];

  if (projects) {
    Object.keys(projects).some((projectKey) => {
      const project = projects[projectKey];

      // Access the teamData for the current project
      const teamData = project.teamData;

      var is_member = Object.keys(project.projectData.team_members).some(
        (memberKey) => {
          const member = project.projectData.team_members[memberKey];
          return member.id === id;
        }
      );
      console.log(project.projectData.id);

      if (is_member) {
        return true; // Skip to the next project
      }
      const projectallProjects = (
        <ApplytoProject
          key={project.projectData.id}
          id={project.projectData.id}
          profile={ashesilogoblank}
          title={project.projectData.title}
          dueDate={
            project.projectData.start_date
              ? moment(project.projectData.start_date).format("Do MMM YYYY") +
                "-" +
                moment(project.projectData.end_date).format("Do MMM YYYY")
              : "-- -- --"
          }
          workhours={
            project.projectData.estimated_project_hours
              ? project.projectData.estimated_project_hours
              : "0"
          }
          People={
            project.projectData.user
              ? project.projectData.user
              : ["assignment pending.."]
          }
          description={
            project.projectData.description
              ? project.projectData.description
              : " "
          }
>>>>>>> fa9007de822d3fd50ac08af696e85c7cb86ab5a1
        />
      );

      allProjects.push(projectallProjects);
<<<<<<< HEAD
      ;

    })
  };
=======
    });
  }
>>>>>>> fa9007de822d3fd50ac08af696e85c7cb86ab5a1

  return (
    <div>
      <Header
        key="header"
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
                  <VerticalList spacing={20} items={allProjects} />,
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
                  // <SubListCard
                  //   items={notificationallProjects}
                  //   title={"Notifications (3)"}
                  //   NoItemMessage={"You have no notifications"}
                  // />,
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
