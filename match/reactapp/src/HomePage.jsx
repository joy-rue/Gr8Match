import React, { useState, useEffect } from "react";
import axios from "axios";
import HorizontalList from "./components/HorizontalList";
import VerticalList from "./components/VerticalList";
import HomeHeader from "./components/HomeHeader";
import Header from "./Header";
import SubListCard from "./components/SubListCard";
import addicon from "./components/icons/addicon.png";
import ProjectCardList from "./components/ProjectCardList";
import Notification from "./components/Notification";
import { Link } from "react-router-dom";
import NotificationsList from "./components/NotificationsList";
import SubBanner from "./components/SubBanner";
import ProjectCard from "./components/ProjectCard";
import Cookies from "js-cookie";
import moment from "moment";

const HomePage = () => {
  const [projects, setAllProjectsData] = useState([]);
  const today = moment().format("Do MMM YYYY");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Retrieve the access token from cookies
        const accessToken = Cookies.get("access");

        // Check if the access token is present
        if (accessToken) {
          // Make the API request using the access token
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
            setAllProjectsData(responseData);
            
          } else if (response.status === 401) {
            await handleTokenRefresh();
          } else {
            console.error("Failed to fetch all projects data:", response.status);
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
      key="notification"
      title={"Onedrive Library"}
      text={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus eros eu vehicula interdum. Cras nec ultricies massa. Curabitur rutrum, diam id consequat consequat"
      }
      date={"11:23 - Aug 2023"}
    />
  );

  const notificationContent = Array(3).fill(notificationElement);

  const createproject = (
    <Link
      to="/createproject"
      style={{
        textDecoration: "none",
        color: "inherit",
        fontWeight: "inherit",
      }}
    >
      <div
        key="createProject"
        style={{
          width: "420px",
          minHeight: "174px",
          backgroundColor: "white",
          borderRadius: "15px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
        // onClick={handleCreateProjectClick}
      >
        <VerticalList
          spacing={10}
          items={[
            <div
              key="createProjectText"
              style={{
                marginTop: "20px",
                fontSize: "30px",
                fontWeight: "600",
                color: "#CAC9CD",
              }}
            >
              Create New Project
            </div>,
            <img
              key="addIcon"
              src={addicon}
              alt=""
              style={{
                width: "40px",
                marginLeft: "110px",
              }}
            />,
          ]}
        />
      </div>
    </Link>
  );
  const [dataList, setDataList] = useState([
    { id: 1, title: "Item 1", milestone: "milestone 1" },
    // { id: 2, title: "Item 2", milestone: "milestone 2" },
    { id: 3, title: "Item 3", milestone: "milestone 3" },
  ]);

  dataList;

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
                        date={today}
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
                                milestone={project.milestones[project.milestones.length - 1].milestone}
                                timeleft={
                                  project.end_date
                                    ? `${Math.ceil(
                                        ((new Date(project.end_date)) - new Date()) /
                                          (1000 * 60 * 60 * 24 * 7)
                                      )} wks`
                                    : " 0 wks"
                                }
                              />
                            ))),
                          createproject,
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
                              items={notificationContent}
                              title={"Notifications (3)"}
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

export default HomePage;
