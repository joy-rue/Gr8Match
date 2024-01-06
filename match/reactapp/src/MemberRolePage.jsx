import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import ListCard from "./components/ListCard";
import sidebanner from "./components/icons/sidebanner.png";
import VerticalList from "./components/VerticalList";
import ProjectHeaderContent from "./components/ProjectHeaderContent";
import ashesibanner from "./components/icons/campusbanner.png";
import HorizontalList from "./components/HorizontalList";
import SubListCard from "./components/SubListCard";
import Notification from "./components/Notification";
import { Link } from "react-router-dom";
import editIcon from "./components/icons/editIcon.png";
import publishIcon from "./components/icons/publishIcon.png";
import adduserIcon from "./components/icons/adduserIcon.png";
import React, { useState, useRef } from "react";
import cancela from "./components/icons/cancela.png";
import cancelb from "./components/icons/cancelb.png";
import cancelc from "./components/icons/cancelc.png";
import clockicon from "./components/icons/clockicon.png";
import IconItem from "./components/IconItem";

const MemberRole = () => {
  const appsElement =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus eros eu vehicula interdum. Cras nec ultricies massa. Curabitur rutrum, diam id consequat consequat";

  const appscontent = [appsElement, appsElement, appsElement];

  const milestoneElement =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus eros eu vehicula interdum. Cras nec ultricies massa. Curabitur rutrum, diam id consequat consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus eros eu vehicula interdum. Cras nec ultricies massa. Curabitur rutrum, diam id consequat consequat";

  const milestonecontent = [
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
  const workhours = 40;
  const [mode, setMode] = useState("icons");
  const [action, setAction] = useState(null); // Set the default cancel icon
  const [content, setContent] = useState(null);
  const [fontColor, setFontColor] = useState(null);
  const [cancelIcon, setCancelIcon] = useState(cancela); // Set the default cancel icon
  const [Ispublished, setIspublished] = useState(false); // Set the default cancel icon

  const handleOperation = (action) => {
    switch (action) {
      case "publish":
        setMode("icons");
        console.log(action);
        setIspublished(!Ispublished);
        console.log(Ispublished);

        break;
      case "invite":
        setMode("icons");
        console.log(action);
        break;
      case "edit":
        setMode("icons");
        console.log(action);

        break;
      default:
        setContent(null);
        setMode("icons");
        break;
    }
  };

  const handleIconClick = (action) => {
    switch (action) {
      case "publish":
        setAction(action);
        setMode("text");
        Ispublished
          ? (setCancelIcon(cancelc),
            setFontColor("#FF4444"),
            setContent("Unpublish"))
          : (setCancelIcon(cancela),
            setFontColor("#04C728"),
            setContent("Publish"));
        break;

      case "invite":
        setAction(action);
        setContent("Invite");
        setMode("text");
        setFontColor("#0077B5");
        setCancelIcon(cancelb);
        break;
      case "edit":
        setAction(action);
        setContent("Edit");
        setMode("text");
        setFontColor("#FF4444");
        setCancelIcon(cancelc);

        break;
      default:
        setContent(null);
        setMode("icons");

        break;
    }
  };

  const headerIcons = (
    <div>
      {mode === "text" ? (
        <HorizontalList
          items={[
            <img
              style={{ width: "20px", cursor: "pointer" }}
              src={cancelIcon}
              alt=""
              onClick={() => {
                setMode("icons");
              }}
            />,

            <div style={{ marginTop: "2px" }}>
              <div
                style={{
                  color: fontColor,
                  fontWeight: "500",
                  cursor: "pointer",
                  marginLeft: "-15px",
                }}
                onClick={() => {
                  handleOperation(action);
                }}
              >
                {content}
              </div>
            </div>,
          ]}
        />
      ) : (
        <HorizontalList
          spacing={30}
          items={[
            <div
              style={{
                fontWeight: "600",
                marginTop: "10px",
                marginRight: "-10px",
              }}
            >
              {Ispublished === true ? (
                <HorizontalList
                  spacing={7}
                  items={[
                    <div
                      style={{
                        width: "7px",
                        height: "7px",
                        fontSize: "12px",
                        borderRadius: "50%",
                        backgroundColor: "#06B217",
                        transform: "translateY(11px)",
                      }}
                    ></div>,
                    <div style={{ fontSize: "20px", color: "#06B217" }}>
                      Published
                    </div>,
                  ]}
                />
              ) : (
                <div style={{ fontWeight: "600", color: "#C2BEBE" }}>
                  <HorizontalList
                    spacing={7}
                    items={[
                      <div
                        style={{
                          width: "7px",
                          height: "7px",
                          fontSize: "12px",
                          borderRadius: "50%",
                          backgroundColor: "#C2BEBE",
                          transform: "translateY(11px)",
                        }}
                      ></div>,
                      <div style={{ fontSize: "20px" }}>Unpublished</div>,
                    ]}
                  />
                </div>
              )}{" "}
            </div>,
            <div
              style={{ cursor: "pointer" }}
              onClick={() => handleIconClick("publish")}
            >
              <img style={{ width: "25px" }} src={publishIcon} alt="" />
            </div>,
            <div
              style={{ cursor: "pointer" }}
              onClick={() => handleIconClick("invite")}
            >
              <img style={{ width: "30px" }} src={adduserIcon} alt="" />
            </div>,
            <div
              style={{ cursor: "pointer" }}
              onClick={() => handleIconClick("edit")}
            >
              <img style={{ width: "30px" }} src={editIcon} alt="" />
            </div>,
          ]}
        />
      )}
    </div>
  );

  return (
    <div>
      <Header
        Page={
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
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div
                            style={{
                              maxWidth: "90%",
                            }}
                          >
                            {"Research Associate "}
                          </div>
                          {headerIcons}
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
                    NoItemMessage={"You have no milestones"}
                  />,
                  <ListCard
                    items={appscontent}
                    title={"Requirements"}
                    NoItemMessage={"You have no Apps"}
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
        }
      />
    </div>
  );
};

export default MemberRole;
