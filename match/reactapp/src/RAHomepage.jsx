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

const RAHomePage = () => {
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
                          ...(dataList &&
                            dataList.map((item) => (
                              <ProjectCard
                                key={item.id}
                                title={item.title}
                                dueDate={"22 Aug 2023"}
                                progress={16}
                                milestone={item.milestone}
                                timeleft={"2wks"}
                              />
                            ))),
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

export default RAHomePage;
