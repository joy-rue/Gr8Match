import React, { useEffect } from "react";
import HorizontalList from "./components/HorizontalList";
import VerticalList from "./components/VerticalList";
import HomeHeader from "./components/HomeHeader";
import sidebanner from "./components/icons/sidebanner.png";
import Header from "./components/Header";
import SubListCard from "./components/SubListCard";
import Notification from "./components/Notification";
import { ProjectCard } from "./components/ProjectCard";
import { useAuth } from './AuthContext';
import { AuthProvider } from './AuthContext';

const HomePage = () => {
const { authToken } = useAuth();
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

  //   notificationcontent = [];
  return (
  <AuthProvider>
      <Header
        Page={[
          // <HomeHeader />,
          <div style={{}}>
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
                            authToken={authToken}  // Pass the token as a prop
                          />,
                          <ProjectCard
                            title={"Berekuso standard of Living Survey k;lm"}
                            dueDate={"22 Aug 2023"}
                            progress={56}
                            milestone={"Quantitative Survey.'df.df'"}
                            timeleft={"2wks"}
                            authToken={authToken}  // Pass the token as a prop
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
                      items={notificationcontent}
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
      </AuthProvider>
    );
  };

export default HomePage;
