import React, { useState, useEffect } from "react";
import HorizontalList from "./components/HorizontalList";
import VerticalList from "./components/VerticalList";
import HomeHeader from "./components/HomeHeader";
import Header from "./components/Header";
import SubListCard from "./components/SubListCard";
import ProjectCardList from "./components/ProjectCardList";
import Notification from "./components/Notification";
import SubBanner from "./components/SubBanner";
import ProjectCard from "./components/ProjectCard";
import moment from "moment";
import Cookies from "js-cookie";
import axios from "axios";

const RAHomePage = () => {
  const [projects, setAllProjectsData] = useState([]);
const [allNotifications, setAllNotifications] = useState([]);
  const today = moment().format("Do MMM YYYY");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Retrieve the access token from cookies
        const accessToken = Cookies.get("access");

        
        if (accessToken) {// Make the API request for all user projects and notifications using the access token

          const response = await axios.get(
            "http://127.0.0.1:5173/api/project/get/",
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );

          const noteResponse = await axios.get(
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
            setAllProjectsData(responseData);
          } else if (response.status === 401) {
            await handleTokenRefresh();
          } else {
            console.error(
              "Failed to fetch all projects data:",
              response.status
            );
          }

          if (noteResponse.status === 200) {
            const noteResponseData = noteResponse.data;
            setAllNotifications(noteResponseData);
          } 
          else if (noteResponse.status === 401)await handleTokenRefresh();
          else console.error("Failed to fetch all notifications data:",noteResponse.status);

        } else {
          console.error("Access token not present");
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    };

    fetchData();
  }, []);

  const handleTokenRefresh = async () => {
    try {
      // Make a request to the backend to refresh access token
      const refreshResponse = await axios.post(
        "http://127.0.0.1:5173/api/account/refresh/",
        {
          refresh: Cookies.get("refresh"),
        }
      );

      const newAccessToken = refreshResponse.data.access;

            Cookies.set("access", newAccessToken);

      // Retry the original API request with the new access token
      await fetchData();
    } catch (error) {
      console.error("Error refreshing token:", error);
    }
  };


  if (allNotifications) { //create notifcation cards for each notification
    for (const notification of allNotifications) {
      const newNotifications = (

        <Notification
          key="notification"
          title={notification.type == 'project'? 'Project Notification': 'General Notification'}
          text={
            notification.detail
          }
          date={notification.date_created}
          //ToDo: add clickable link
        />
      )
      //allNotes.push(newNotifications);
      setAllNotifications(newNotifications) //add elipses
    }
  }

  const notificationElement = (
    <Notification
      key="notification"
      title={"Onedrive Library"}
      text={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus eros eu vehicula interdum. Cras nec ultricies massa. Curabitur rutrum, diam id consequat consequat"
      }
      date={"11:23 - Aug 2023"}
    />
  );

  const notificationContent = Array(3).fill(notificationElement);

  const dataList = ([
    {
      id: 1,
      title: "Ghana Economic Index Study for people with special abilities",
      milestone: "Participant Sampling",
    },
    // { id: 2, title: "Item 2", milestone: "milestone 2" },
    {
      id: 3,
      title: "Learning Models for RISC and CISC architecture and Algorithms",
      milestone: "Ethnographic Research",
    },
  ]);


  return (
    <div>
      <Header
        Page={[
          <div key="mainContent">
            <HorizontalList
              spacing={20}
              items={[
                <div key="leftContent">
                  <VerticalList
                    spacing={20}
                    items={[
                      <HomeHeader
                        key="homeHeader"
                        title={"My Projects"}
                        spacing={"470px"}
                      />,
                      <ProjectCardList
                        cards={[
                          ...(projects &&
                            projects.map((project) => (
                              <ProjectCard
                                project_key={project.id}
                                title={project.title}
                                dueDate={project.end_date}
                                progress={16}
                                milestone={
                                project.milestones[
                                  project.milestones.length - 1
                                ].milestone
                              }
                                timeleft={
                                project.end_date
                                  ? `${Math.ceil(
                                      (new Date(project.end_date) -
                                        new Date()) /
                                        (1000 * 60 * 60 * 24 * 7)
                                    )} wks`
                                  : " 0 wks"
                              }
                              />
                            )))
                        ]}
                      />,
                    ]}
                  />
                </div>,
                <div>
                  <VerticalList
                    key="rightContent"
                    spacing={20}
                    items={[
                      <div>
                        <VerticalList
                          key="rightContent"
                          spacing={20}
                          items={[
                            <SubBanner />,
                            <SubListCard
                              // key="subListCard"
                              items={notificationContent} //{allNotifications}
                              title={`Notifications ${allNotifications.length}`}
                              NoItemMessage={"You have no notifications"}
                            />,
                          ]}
                        />
                      </div>,
                    ]}
                  />
                </div>,
              ]}
            />
          </div>,
        ]}
      />
    </div>
  );
};

export default RAHomePage;
