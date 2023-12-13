import React from "react";
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
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const { authToken, logout } = useAuth();
  const navigate = useNavigate();

    const handleLogout = () => {
      logout();
      navigate('/'); // Redirect to the login page
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

  const notificationContent = Array(3).fill(notificationElement);

  return (
    <AuthProvider>
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
                            authToken={authToken}
                          />,
                          <ProjectCard
                            title={"Berekuso standard of Living Survey k;lm"}
                            dueDate={"22 Aug 2023"}
                            progress={56}
                            milestone={"Quantitative Survey.'df.df'"}
                            timeleft={"2wks"}
                            authToken={authToken}
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
    </AuthProvider>
  );
};

export default HomePage;
