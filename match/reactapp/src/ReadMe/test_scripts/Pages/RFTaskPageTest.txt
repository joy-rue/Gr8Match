import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import VerticalList from "./components/VerticalList";
import ProjectHeaderContent from "./components/ProjectHeaderContent";
import Notification from "./components/Notification";
import HorizontalList from "./components/HorizontalList";
import SubListCard from "./components/SubListCard";
import IconItem from "./components/IconItem";
import AddResponsibility from "./components/AddResponsibility";
import PopUpForm from "./components/PopUpForm";

import submitIcon from "./components/icons/submitIcon.png";
import sidebanner from "./components/icons/sidebanner.png";
import ashesibanner from "./components/icons/campusbanner.png";
import editIcon from "./components/icons/editIcon.png";
import publishIcon from "./components/icons/publishIcon.png";
import adduserIcon from "./components/icons/adduserIcon.png";
import cancela from "./components/icons/cancela.png";
import cancelb from "./components/icons/cancelb.png";
import cancelc from "./components/icons/cancelc.png";
import deleteIcon from "./components/icons/deleteIcon.png";
import clockicon from "./components/icons/clockicon.png";
import AddRequirement from "./components/AddRequirement";
import disapproveIcon from "./components/icons/withdrawIcon.png";
import approveIcon from "./components/icons/approveIcon.png";
import withdrawIcon from "./components/icons/withdrawIcon.png";
import republishIcon from "./components/icons/republishIcon.png";
import Textbox from "./components/Textbox";
import CommentList from "./components/CommentList";
import AddTask from "./components/AddTask";

const RFTaskPage = () => {
  const workhours = 40;
  const [state, setState] = useState("In Progress");
  const [stateColor, setStateColor] = useState("#F4CF0A");
  const [mode, setMode] = useState("icons");
  const [action, setAction] = useState(null);
  const [content, setContent] = useState(null);
  const [fontColor, setFontColor] = useState(null);
  const [cancelIcon, setCancelIcon] = useState(cancela);
  const [isPublished, setIsPublished] = useState(false);
  const [check, setCheck] = useState(false);
  const [PopForm, setPopForm] = useState(null);
  const [PopUpOpen, setPopUpOpen] = useState(false);
  const [PopUpFormHeader, setPopUpFormHeader] = useState("");
  const commentUser = "User1";

  const comments = [
    {
      id: 1,
      sender: "User2",
      date: "2024-01-09",
      time: "11:30 AM",
      message: "This comment was on tuesday",
    },
    {
      id: 2,
      sender: "User2",
      date: "2024-01-11",
      time: "11:30 AM",
      message: "This comment was Thursday.",
    },
    {
      id: 3,
      sender: "User1",
      date: "2024-01-12",
      time: "11:30 AM",
      message: "This comment is Friday.",
    },
    {
      id: 4,
      sender: "User1",
      date: "2024-01-13",
      time: "11:30 AM",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus eros eu vehicula interdum. Cras nec ultricies massa. Curabitur rutrum, diam id consequat consequat",
    },
    {
      id: 4,
      sender: "User2",
      date: "2024-01-13",
      time: "11:30 AM",
      message: "this comment is Saturday",
    },
    {
      id: 4,
      sender: "User1",
      date: "2024-01-13",
      time: "11:30 AM",
      message: "this comment is Saturday",
    },
    // {
    //   id: 5,
    //   sender: "User2",
    //   date: "2024-01-19",
    //   time: "11:30 AM",
    //   message: "This comment is in a couple of days.",
    // },
    // {
    //   id: 6,
    //   sender: "User2",
    //   date: "2024-01-24",
    //   time: "11:30 AM",
    //   message: "This comment is in weeks",
    // },
    // {
    //   id: 7,
    //   sender: "User2",
    //   date: "2024-03-12",
    //   time: "11:30 AM",
    //   message: "This comment is in months.",
    // },
  ];

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

  const handleOperation = (action) => {
    switch (action) {
      case "edit":
        setMode("icons");
        console.log(action);
        break;
      case "submit":
        setState("Pending");
        setStateColor("#0077B5");
        setMode("icons");
        console.log(action);
        break;
      case "withdraw":
        setState("In Progress");
        setStateColor("#F4CF0A");
        setMode("icons");
        console.log(action);
        break;
      case "delete":
        setMode("icons");
        console.log(action);
        break;
      case "approve":
        setState("Completed");
        setStateColor("#04C728");
        setMode("icons");
        console.log(action);
        break;
      case "disapprove":
        setState("In Progress");
        setStateColor("#F4CF0A");
        setMode("icons");
        console.log(action);
        break;
      case "republish":
        setState("In Progress");
        setStateColor("#F4CF0A");
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
      case "withdraw":
        setAction(action);
        setContent("Withdraw");
        setMode("text");
        setFontColor("#FF4444");
        setCheck(true);
        setCancelIcon(cancelc);
        break;
      case "republish":
        setAction(action);
        setContent("Republish");
        setMode("text");
        setCheck(true);
        setFontColor("#0077B5");
        setCancelIcon(cancelb);
        break;
      case "approve":
        setAction(action);
        setContent("Approve");
        setMode("text");
        setFontColor("#04C728");
        setCheck(true);
        setCancelIcon(cancela);
        break;
      case "disapprove":
        setAction(action);
        setContent("Disapprove");
        setMode("text");
        setCheck(true);
        setFontColor("#FF4444");
        setCancelIcon(cancelc);
        break;
      case "edit":
        setAction(action);
        setContent("Edit");
        handleEditTaskPopUpForm();
        break;
      case "submit":
        setAction(action);
        setContent("Submit");
        setMode("text");
        setFontColor("#04C728");
        setCheck(true);
        setCancelIcon(cancela);
        break;
      case "add":
        setAction(action);
        setContent("Add Task");
        setMode("text");
        setFontColor("#0077B5");
        setCancelIcon(cancelb);
        break;
      case "delete":
        setAction(action);
        setContent("Delete Task");
        setMode("text");
        setFontColor("#FF4444");
        setCancelIcon(cancelc);
        setCheck(true);

        break;
      default:
        setContent(null);
        setMode("icons");
        break;
    }
  };

  const inProgressheaderIcons = (
    <div>
      {mode === "text" ? (
        <HorizontalList
          spacing={0}
          items={[
            <img
              style={{
                width: "20px",
                cursor: "pointer",
                marginRight: "10px",
                marginTop: "7px",
              }}
              src={cancelIcon}
              alt=""
              onClick={() => {
                setMode("icons");
                setCheck(false);
              }}
            />,

            <div style={{ marginTop: "0px", padding: "0px" }}>
              <div
                style={{
                  color: fontColor,
                  fontWeight: "500",
                  fontSize: "22px",
                  cursor: "pointer",
                  //   marginLeft: "-15px",
                  marginRight: "30px",
                }}
                onClick={() => {
                  handleOperation(action);
                  submitRef.current.handlePrintCheckedItems();
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
              style={{ cursor: "pointer" }}
              onClick={() => handleIconClick("submit")}
            >
              <img style={{ width: "20px" }} src={submitIcon} alt="" />
            </div>,
            <div
              style={{ cursor: "pointer" }}
              onClick={() => handleIconClick("edit")}
            >
              <img style={{ height: "25px" }} src={editIcon} alt="" />
            </div>,
            <div
              style={{ cursor: "pointer" }}
              onClick={() => handleIconClick("delete")}
            >
              <img style={{ width: "20px" }} src={deleteIcon} alt="" />
            </div>,
          ]}
        />
      )}
    </div>
  );

  const pendingheaderIcons = (
    <div>
      {mode === "text" ? (
        <HorizontalList
          spacing={0}
          items={[
            <img
              style={{
                width: "20px",
                cursor: "pointer",
                marginRight: "10px",
                marginTop: "7px",
              }}
              src={cancelIcon}
              alt=""
              onClick={() => {
                setMode("icons");
                setCheck(false);
              }}
            />,

            <div style={{ marginTop: "0px", padding: "0px" }}>
              <div
                style={{
                  color: fontColor,
                  fontWeight: "500",
                  fontSize: "22px",
                  cursor: "pointer",
                  //   marginLeft: "-15px",
                  marginRight: "30px",
                }}
                onClick={() => {
                  handleOperation(action);
                  submitRef.current.handlePrintCheckedItems();
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
              style={{ cursor: "pointer" }}
              onClick={() => handleIconClick("approve")}
            >
              <img style={{ width: "23px" }} src={approveIcon} alt="" />
            </div>,
            <div
              style={{ cursor: "pointer" }}
              onClick={() => handleIconClick("disapprove")}
            >
              <img style={{ width: "23px" }} src={disapproveIcon} alt="" />
            </div>,
          ]}
        />
      )}
    </div>
  );

  const completedheaderIcons = (
    <div>
      {mode === "text" ? (
        <HorizontalList
          spacing={0}
          items={[
            <img
              style={{
                width: "20px",
                cursor: "pointer",
                marginRight: "10px",
                marginTop: "7px",
              }}
              src={cancelIcon}
              alt=""
              onClick={() => {
                setMode("icons");
                setCheck(false);
              }}
            />,

            <div style={{ marginTop: "0px", padding: "0px" }}>
              <div
                style={{
                  color: fontColor,
                  fontWeight: "500",
                  fontSize: "22px",
                  cursor: "pointer",
                  //   marginLeft: "-15px",
                  marginRight: "30px",
                }}
                onClick={() => {
                  handleOperation(action);
                  submitRef.current.handlePrintCheckedItems();
                }}
              >
                {content}
              </div>
            </div>,
          ]}
        />
      ) : (
        <div
          style={{ cursor: "pointer" }}
          onClick={() => handleIconClick("republish")}
        >
          <img
            style={{ width: "23px", marginRight: "30px" }}
            src={republishIcon}
            alt=""
          />
        </div>
      )}
    </div>
  );

  const openPopUp = () => {
    setPopUpOpen(true);
  };

  const OnPopUpClose = () => {
    setPopUpOpen(false);
  };

  const handleEditTaskPopUpForm = () => {
    setPopUpFormHeader("Edit Task");
    setPopUpOpen(true);
    setPopForm(<AddTask- handleAddTask={editTask} />);
  };

  const editTask = (Task) => {
    console.log("add Task");
    console.log(`add Task: ${Task}`);
    setPopUpOpen(false);
  };

  const taskHeader = (
    <div
      style={{
        width: "60vw",
        maxHeight: "90vh",
        padding: "20px",
        backgroundColor: "white",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          borderBottom: "2px solid #C2BEBE",
          paddingBottom: "10px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h4
            style={{
              maxWidth: "90%",
              marginRight: "10px",
            }}
          >
            {"Create research Survey Lorem ipsum dolor sit amet"}
          </h4>
          {state === "Pending" && pendingheaderIcons}
          {state === "Completed" && completedheaderIcons}
          {state === "In Progress" && inProgressheaderIcons}
        </div>
        <div
          style={{
            color: "#0A66C2",
            fontWeight: "500",
            fontSize: "18px",
          }}
        >
          <HorizontalList
            items={[
              <div style={{ width: "150px" }}>
                <HorizontalList
                  spacing={7}
                  items={[
                    <div
                      style={{
                        width: "7px",
                        height: "7px",
                        borderRadius: "50%",
                        backgroundColor: `${stateColor}`,
                        transform: "translateY(11px)",
                      }}
                    ></div>,
                    <div
                      style={{
                        fontSize: "20px",
                        color: `${stateColor}`,
                      }}
                    >
                      {state}
                    </div>,
                  ]}
                />
              </div>,
              <div
                style={{
                  fontWeight: "350",
                  fontSize: "20px",
                  width: "150px",
                  color: "black",
                }}
              >
                1 Dec 2023
              </div>,
              <div
                style={{
                  fontWeight: "500",
                  color: "#0A66C2",
                  fontSize: "20px",
                }}
              >
                2wks
              </div>,
            ]}
          />
        </div>
      </div>
      <div
        key={"chatbox"}
        style={{
          height: "53vh",
          overflowY: "auto", // Display scrollbar only when content overflows
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <CommentList comments={comments} commentUser={commentUser} />
      </div>
      <div
        style={{
          paddingTop: "10px",
          borderTop: "2px solid #C2BEBE ",
          marginBottom: "-5px",
        }}
      >
        <Textbox />
      </div>
    </div>
  );

  return (
    <div>
      <PopUpForm
        isOpen={PopUpOpen}
        title={PopUpFormHeader}
        PopUpForm={PopForm}
        onClose={OnPopUpClose}
      />
      <Header
        Page={
          <div>
            <HorizontalList
              spacing={20}
              items={[
                <VerticalList spacing={5} items={[taskHeader]} />,
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

export default RFTaskPage;
