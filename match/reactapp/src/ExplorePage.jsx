import React from "react";
import HorizontalList from "./components/HorizontalList";
import HomeHeader from "./components/HomeHeader";
import Header from "./Header";
import VerticalList from "./components/VerticalList";
import sidebanner from "./components/icons/sidebanner.png";
import Notification from "./components/Notification";
import SubListCard from "./components/SubListCard";
import ApplytoProject from "./components/ApplytoProject";
import ashesilogoblank from "./components/icons/ashesiblanklogo.png"

const ExplorePage = () => {
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

      const milestoneElement = (
        <ApplytoProject
          profile={ashesilogoblank}
          title={"Exploring Participant Sampling In Berekuso"}
          dueDate={"20th Aug 2023 - 23 Jun 2024"}
          timeleft={"2wks"}
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
                    date={"22 Aug 2023"}
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