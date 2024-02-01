import React, { useState, useRef } from "react";
import HorizontalList from "./HorizontalList";
import addIcon from "./icons/addtaskIcon.png";
import deleteIcon from "./icons/deleteIcon.png";
import submitIcon from "./icons/submitIcon.png";
import cancela from "./icons/cancela.png";
import cancelb from "./icons/cancelb.png";
import cancelc from "./icons/cancelc.png";
import ListCard from "./ListCard";
import { useNavigate } from "react-router-dom";

const UpcomingTask = ({ items }) => {
  const [content, setContent] = useState(null);
  const [check, setCheck] = useState(false);
  const [mode, setMode] = useState("icons");
  const [fontColor, setFontColor] = useState(null);
  const [cancelIcon, setCancelIcon] = useState(cancela); // Set the default cancel icon
  const [action, setAction] = useState(null); // Set the default cancel icon
  const submitRef = useRef(null);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
    {
      isChecked && console.log("!isChecked");
    }
  };

  const handleSubmitOperation = (
    checkedItemsToPrint,
    subaction = action || "default"
  ) => {
    switch (subaction) {
      case "submit":
        setMode("icons");
        setCheck(false);
        checkedItemsToPrint.forEach((item) => {
          console.log(`submit: ${item}`);
        });
        break;
      case "add":
        setMode("icons");
        setCheck(false);
        checkedItemsToPrint.forEach((item) => {
          console.log(`add: ${item}`);
        });
        break;
      case "delete":
        setMode("icons");
        setCheck(false);
        checkedItemsToPrint.forEach((item) => {
          console.log(`delete: ${item}`);
        });
        console.log(checkedItemsToPrint);
        break;
      default:
        setContent(null);
        setCheck(false);
        setMode("icons");
        break;
    }
  };

  const handleOperation = (action) => {
    switch (action) {
      case "submit":
        setMode("icons");
        setCheck(false);
        console.log(action);
        break;
      case "add":
        setMode("icons");
        setCheck(false);
        console.log(action);

        break;
      case "delete":
        setMode("icons");
        setCheck(false);
        console.log(action);

        break;
      default:
        setContent(null);
        setCheck(false);
        setMode("icons");
        break;
    }
  };

  const handleIconClick = (action) => {
    switch (action) {
      case "submit":
        setAction(action);
        setContent("Submit Task");
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
        setCheck(false);
        break;
    }
  };

  const [isChecked, setChecked] = useState(false);

  const viewTask = () => {
    navigate("/task");
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
                setCheck(false);
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
              onClick={() => handleIconClick("add")}
            >
              <img style={{ width: "20px" }} src={addIcon} alt="" />
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

  return (
    <div>
      <ListCard
        items={items}
        title={
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ maxWidth: "90%" }}>{"Upcoming Tasks"}</div>
            {headerIcons}
          </div>
        }
        NoItemMessage="No items available"
        showCheckbox={check}
        submitOperation={handleSubmitOperation}
        ref={submitRef}
        onSelectItem={viewTask}
      />
    </div>
  );
};

export default UpcomingTask;
