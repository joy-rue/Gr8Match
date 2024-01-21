import React, { useState, useRef } from "react";
import HorizontalList from "./HorizontalList";
import republishIcon from "./icons/republishIcon.png";
import cancelb from "./icons/cancelb.png";
import ListCard from "./ListCard";
import { useNavigate } from "react-router-dom";

const FacultyCompletedTask = ({ items }) => {
  const [content, setContent] = useState(null);
  const [check, setCheck] = useState(false);
  const [mode, setMode] = useState("icons");
  const [fontColor, setFontColor] = useState(null);
  const [cancelIcon, setCancelIcon] = useState(cancelb); // Set the default cancel icon
  const [action, setAction] = useState(null); // Set the default cancel icon
  const submitRef = useRef(null);
  const navigate = useNavigate();

  const viewTask = () => {
    navigate("/task");
  };

  const handleSubmitOperation = (
    checkedItemsToPrint,
    subaction = action || "default"
  ) => {
    switch (subaction) {
      case "republish":
        setMode("icons");
        setCheck(false);
        checkedItemsToPrint.forEach((item) => {
          console.log(`submit: ${item}`);
        });
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
      case "republish":
        setAction(action);
        setContent("Republish");
        setMode("text");
        setCheck(true);
        setFontColor("#0077B5");
        setCancelIcon(cancelb);
        break;
      default:
        setContent(null);
        setMode("icons");
        setCheck(false);
        break;
    }
  };

  const headerIcons = (
    <div>
      {mode === "text" ? (
        <HorizontalList
          items={[
            <img
              style={{ width: "20px", cursor: "pointer", marginRight: "10px" }}
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
            <div style={{ maxWidth: "90%" }}>{"Completed Tasks"}</div>
            {headerIcons}
          </div>
        }
        NoItemMessage="No Task Completed"
        showCheckbox={check}
        submitOperation={handleSubmitOperation}
        ref={submitRef}
        onSelectItem={viewTask}
      />
    </div>
  );
};

export default FacultyCompletedTask;
