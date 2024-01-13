import cancelb from "./icons/cancelb.png";
import cancelc from "./icons/cancelc.png";
import deleteIcon from "./icons/deleteIcon.png";
import addIcon from "./icons/add_Icon.png";
import React, { useState } from "react";
import HorizontalList from "./HorizontalList";

const ListItemsIcons = ({
  handleDeleteOperation,
  handleAddOperation,
  handleIconClickAction,
}) => {
  const [mode, setMode] = useState("icons");
  const [action, setAction] = useState(null);
  const [content, setContent] = useState(null);
  const [fontColor, setFontColor] = useState(null);
  const [cancelIcon, setCancelIcon] = useState(cancelb);

  const handleOperation = (action) => {
    switch (action) {
      case "delete":
        setMode("icons");
        handleDeleteOperation?.();
        break;
      case "add":
        setMode("icons");
        handleAddOperation?.();
        break;
      default:
        setContent(null);
        setMode("icons");
        break;
    }
  };

  const handleIconClick = (action) => {
    handleIconClickAction(action);

    switch (action) {
      case "delete":
        setAction(action);
        setContent("Delete");
        setMode("text");
        setFontColor("#FF4444");
        setCancelIcon(cancelc);
        break;
      case "add":
        setAction(action);
        break;
      default:
        setContent(null);
        setMode("icons");
        break;
    }
  };

  return (
    <div>
      {mode === "text" ? (
        <HorizontalList
          items={[
            <img
              style={{ width: "20px", cursor: "pointer" }}
              src={cancelIcon}
              alt=""
              onClick={() => {
                handleIconClick("default");
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
              style={{ cursor: "pointer" }}
              onClick={() => handleIconClick("add")}
            >
              <img style={{ height: "20px" }} src={addIcon} alt="" />
            </div>,
            <div
              style={{ cursor: "pointer" }}
              onClick={() => handleIconClick("delete")}
            >
              <img style={{ height: "20px" }} src={deleteIcon} alt="" />
            </div>,
          ]}
        />
      )}
    </div>
  );
};

export default ListItemsIcons;
