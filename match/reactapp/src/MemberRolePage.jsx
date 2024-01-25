import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import ListCard from "./components/ListCard";
import VerticalList from "./components/VerticalList";
import ProjectHeaderContent from "./components/ProjectHeaderContent";
import Notification from "./components/Notification";
import HorizontalList from "./components/HorizontalList";
import SubListCard from "./components/SubListCard";
import IconItem from "./components/IconItem";
import ModListCard from "./components/ModListCard";
import AddResponsibility from "./components/AddResponsibility";
import PopUpForm from "./components/PopUpForm";
import ListItemsIcons from "./components/ListItemsIcons";
import axios from "axios";
import Cookies from "js-cookie";
import sidebanner from "./components/icons/sidebanner.png";
import ashesibanner from "./components/icons/campusbanner.png";
import editIcon from "./components/icons/editIcon.png";
import publishIcon from "./components/icons/publishIcon.png";
import adduserIcon from "./components/icons/adduserIcon.png";
import cancela from "./components/icons/cancela.png";
import cancelb from "./components/icons/cancelb.png";
import cancelc from "./components/icons/cancelc.png";
import deleteIcon from "./components/icons/deleteIcon.png";
import add_Icon from "./components/icons/add_Icon.png";
import clockicon from "./components/icons/clockicon.png";
import profile from "./components/icons/profile.png";
import AddRequirement from "./components/AddRequirement";


const MemberRole = () => {
  const workhours = 40;
 
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
  const [isMatchRequested, setIsMatchRequested] = useState(false);
  const [addPersonIcon, setAddPersonIcon] = useState(add_Icon);
  const {project_id} = useParams();

  useEffect(() => {
    const getMatchData = async () => {
      const accessToken = Cookies.get('access');
      try {
        
        const matchDataResponse = await axios.get(`http://127.0.0.1:5173/api/project/match/get/${project_id}/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
  
        console.log(matchDataResponse);
  
        if (matchDataResponse.status === 200) {
          setIsMatchRequested(true);
        } else if (matchDataResponse.status === 400) {
          handleTokenRefresh();
          console.error("Project not found:", matchDataResponse.status);
        } else if (matchDataResponse.status === 403) {
          handleTokenRefresh();
          console.log("No permission to request RA");
        } else {
          console.error("Unexpected status code:", matchDataResponse.status);
        }
      } catch (error) {
        console.error("Could not send request:", error.message);
      }
    };
    getMatchData();
  }, [project_id]);  
  

  const handleMatchRequest = async () => {
    console.log(project_id);
    try {
      const accessToken = Cookies.get("access");

      // Check if the match is already requested
      if (isMatchRequested) {
        console.log("Match request already sent");

      } else {
        // Make a POST request to send the match request
        const matchResponse = await axios.post(
          `http://127.0.0.1:5173/api/project/match/request/${project_id}/`, 
          {},
          {
            headers: {
              'Content-Type': 'application/json', 
              'Authorization': `Bearer ${accessToken}`,
            },
            withCredentials: true,
          }
        );

        if (matchResponse.status === 200) {
        
          setIsMatchRequested(true);
          
        } else if (matchResponse.status === 401) {
          await handleTokenRefresh();  
          console.log("back here again");        
          console.error("Failed to send match request:", matchResponse.status);
        } else {
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
  await handleTokenRefresh();
 
          console.error("Failed to send match request:", matchResponse.status);
           
        }
      }
    } catch (error) {
      console.error("Error sending match request:", error);
    }
  };


  const publish = async () => {
    const accessToken = Cookies.get('access');
    try {
      
      
      const publishResponse = await axios.post(`http://127.0.0.1:5173/api/project/visibility/change/${project_id}/`, {},
      {
        headers: {
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${accessToken}`,
        },
        withCredentials: true,
      }
      );

      console.log(publishResponse);

      if (publishResponse.status === 200) {
        setIsMatchRequested(true);
      } else if (publishResponse.status === 400){
        handleTokenRefresh();
        console.error("Project not found:", publishResponse.status);
      } else if (publishResponse.status === 403){
        handleTokenRefresh();
        console.log("No permission to publish");
      } else {
        console.error("Unexpected status code:", publishResponse.status);
      }
    } catch (error) {
      console.error("Could not publish request:", error.message);
    }
  };


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

  const handleOperation = (action) => {
    switch (action) {
      case "publish":
        setMode("icons");
        console.log(action);
        setIsPublished(!isPublished);
        publish();
        console.log(isPublished);
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
        isPublished
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

  const handleResponsibilityPopUpForm = () => {
    setPopUpFormHeader("Add Responsibility");
    setPopUpOpen(true);
    setPopForm(
      <AddResponsibility handleAddResponsibility={addResponsibility} />
    );
  };

  const OnPopUpClose = () => {
    setPopUpOpen(false);
  };



  const deleteResponsibility = (checkedItems) => {
    console.log("delete Responsibility");
    console.log(`delete Responsibility: ${checkedItems}`);
  };

  const addResponsibility = (responsibility) => {
    console.log("add Responsibility");
    console.log(`add Responsibility: ${responsibility}`);
    setPopUpOpen(false);
  };

  const handleRequirementPopUpForm = () => {
    setPopUpOpen(true);
    setPopUpFormHeader("Add Requirement");
    setPopForm(<AddRequirement handleAddRequirement={addRequirement} />);
  };

  const deleteRequirement = (checkedItems) => {
    console.log("delete Requirement");
    console.log(`delete Requirement: ${checkedItems}`);
  };

  const addRequirement = (requirement) => {
    console.log("add Requirement");
    console.log(`add Requirement: ${requirement}`);
    setPopUpOpen(false);
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
              {isPublished === true ? (
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
              <img style={{ width: "20px" }} src={publishIcon} alt="" />
            </div>,
           <div
           style={{ cursor: "pointer" }}
           onClick={() => handleMatchRequest()}
         >
           <img style={{ width: "25px" }} src={isMatchRequested ? profile : adduserIcon} alt="" />
         </div>,
            <div
              style={{ cursor: "pointer" }}
              onClick={() => handleIconClick("edit")}
            >
              <img style={{ width: "25px" }} src={editIcon} alt="" />
            </div>,
          ]}
        />
      )}
    </div>
  );

  const openPopUp = () => {
    setPopUpOpen(true);
  };



  return (
    <div>
      <PopUpForm
        isOpen={PopUpOpen}
        title={PopUpFormHeader}
        PopUpForm={PopForm}
        onClose={OnPopUpClose}
      />
      <Header
        // PopUpisOpen={true}
        // PopUptitle={"HIe"}
        // PopUpForm={PopForm}
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
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <div
                              style={{
                                maxWidth: "90%",
                                marginRight: "10px",
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
                    <ModListCard
                      items={milestonecontent}
                      title={"Responsibility"}
                      NoItemMessage={"This role has no responsibilities"}
                      handleAddOperation={addResponsibility}
                      handleDeleteOperation={deleteResponsibility}
                      handleAddIconClick={handleResponsibilityPopUpForm}
                    />,
                    <ModListCard
                      items={appscontent}
                      title={"Requirements"}
                      NoItemMessage={"This role has no requirements"}
                      handleAddOperation={addRequirement}
                      handleDeleteOperation={deleteRequirement}
                      handleAddIconClick={handleRequirementPopUpForm}
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

export default MemberRole;
