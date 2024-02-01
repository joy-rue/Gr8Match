import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "./components/Header";
import ListCard from "./components/ListCard";
import VerticalList from "./components/VerticalList";
import ProjectHeaderContent from "./components/ProjectHeaderContent";
import Notification from "./components/Notification";
import HorizontalList from "./components/HorizontalList";
import SubListCard from "./components/SubListCard";
import IconItem from "./components/IconItem";
import sidebanner from "./components/icons/sidebanner.png";
import ashesibanner from "./components/icons/campusbanner.png";
import clockicon from "./components/icons/clockicon.png";

const RAMemberRole = () => {
  const workhours = 40;

  const appsElement =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus eros eu vehicula interdum. Cras nec ultricies massa. Curabitur rutrum, diam id consequat consequat";

  const appscontent = [appsElement, appsElement, appsElement];

  const milestoneElement =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus eros eu vehicula interdum. Cras nec ultricies massa. Curabitur rutrum, diam id consequat consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus eros eu vehicula interdum. Cras nec ultricies massa. Curabitur rutrum, diam id consequat consequat";

  const milestonecontent = [
    milestoneElement,
    milestoneElement,
    milestoneElement,
    milestoneElement,
    milestoneElement,
    milestoneElement,
    milestoneElement,
    milestoneElement,
    milestoneElement,
    milestoneElement,
    milestoneElement,
    milestoneElement,
    milestoneElement,
    milestoneElement,
    milestoneElement,
    milestoneElement,
    milestoneElement,
    milestoneElement,
  ];

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

  const notificationElement = (
    <Notification
      title={"Onedrive Library"}
      text={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus eros eu vehicula interdum. Cras nec ultricies massa. Curabitur rutrum, diam id consequat consequat"
      }
      date={"11:23 - Aug 2023"}
    />
  );

  const notificationcontent = [
    notificationElement,
    notificationElement,
    notificationElement,
  ];

  return (
    <div>
      <Header
        Page={
          <div>
            <HorizontalList
              spacing={20}
              items={[
                <VerticalList
                  spacing={20}
                  items={[
                    <ProjectHeaderContent
                      title={
                        <div>
                          <div
                            style={{
                              maxWidth: "90%",
                              marginRight: "10px",
                            }}
                          >
                            {"Research Associate "}
                          </div>
                          <div
                            style={{
                              color: "#0A66C2",
                              fontWeight: "500",
                              fontSize: "18px",
                              marginTop: "7px",
                            }}
                          >
                            <IconItem
                              icon={clockicon}
                              item={`${workhours}hrs/wk`}
                            />
                          </div>
                        </div>
                      }
                      banner={ashesibanner}
                    />,
                    <ListCard
                      items={milestonecontent}
                      title={"Responsibility"}
                      NoItemMessage={"This role has no responsibilities"}
                    />,
                    <ListCard
                      items={appscontent}
                      title={"Requirements"}
                      NoItemMessage={"This role has no requirements"}
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
                  ]}
                />,
              ]}
            />
          </div>
        }
      />
    </div>
  );
};

export default RAMemberRole;
