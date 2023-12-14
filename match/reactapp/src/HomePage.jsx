import React, { useState, useEffect } from "react";
import HorizontalList from "./components/HorizontalList";
import VerticalList from "./components/VerticalList";
import HomeHeader from "./components/HomeHeader";
import Header from "./Header";
import SubListCard from "./components/SubListCard";
import addicon from "./components/icons/addicon.png";
import ProjectCardList from "./components/ProjectCardList";
import Notification from "./components/Notification";
import NotificationsList from "./components/NotificationsList";
import SubBanner from "./components/SubBanner";
import { ProjectCard } from "./components/ProjectCard";
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';

const ProtectedProject = ({ token }) => {
  if (!token) {
    const navigate = useNavigate();
    navigate("/ProjectPage");
    return navigate("/Login"); // Redirect if not authorized
  }

  return <ProjectPage/>; // Render ProjectPage if authorized
};

const HomePage = () => {
    const navigate = useNavigate();
    const token = Cookies.get("token"); // Get token from cookies

      if (!token) {
        return null; // Don't render HomePage if not authorized
      }

    const handleLogout = () => {
      logout();
      navigate('/Login'); // Redirect to the login page
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
    <div
      key="createProject"
      style={{
        width: "420px",
        height: "174px",
        backgroundColor: "white",
        borderRadius: "15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <VerticalList
        spacing={10}
        items={[
          <div
            key="createProjectText"
            style={{
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
  );
  const sampleCard = (
    <ProjectCard
      key="sampleCard"
      title={"Berekuso standard of Living Survey k;lm"}
      dueDate={"22 Aug 2023"}
      progress={16}
      milestone={"Quantitative Survey dfdf'"}
      timeleft={"2wks"}
    />);
  return (

      <Header
        Page={[
          <div>
            <button onClick={handleLogout} style={{ margin: '10px' }}>
              Logout
            </button>
            <HorizontalList
              spacing={20}
              items={[
                <div>
                  <VerticalList
                    spacing={20}
                    items={[
                      <HomeHeader />,
                      <HorizontalList
                        spacing={20}
                        items={[
                          <ProjectCard
                            title={"Berekuso standard of Living Survey k;lm"}
                            dueDate={"22 Aug 2023"}
                            progress={56}
                            milestone={"Quantitative Survey.'df.df'"}
                            timeleft={"2wks"}
                          />,
                          <ProjectCard
                            title={"Berekuso standard of Living Survey k;lm"}
                            dueDate={"22 Aug 2023"}
                            progress={56}
                            milestone={"Quantitative Survey.'df.df'"}
                            timeleft={"2wks"}

                          />,
                        ]}
                      />,
                    ]}
                  />
                </div>,
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
                      items={notificationContent}
                      title={"Notifications (3)"}
                      NoItemMessage={"You have no notifications"}
                    />,
                  ]}
                />,
              ]}
            />
          </div>,
        ]}
      />

  );
  const sampleCards = [sampleCard, sampleCard, sampleCard, createproject];

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
                        date={"22 Aug 2023"}
                        spacing={"27vw"}
                      />,
                      <ProjectCardList
                        key="projectCardList"
                        cards={sampleCards}
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
                              items={notificationcontent}
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
