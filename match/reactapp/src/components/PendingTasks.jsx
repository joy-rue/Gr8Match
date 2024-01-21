import React, { useState, useRef } from "react";
import HorizontalList from "./HorizontalList";
import withdrawIcon from "./icons/withdrawIcon.png";
import cancela from "./icons/cancela.png";
import cancelc from "./icons/cancelc.png";
import ListCard from "./ListCard";
import { useNavigate } from "react-router-dom";

const PendingTasks = ({ items }) => {
  const [content, setContent] = useState(null);
  const [check, setCheck] = useState(false);
  const [mode, setMode] = useState("icons");
  const [fontColor, setFontColor] = useState(null);
  const [cancelIcon, setCancelIcon] = useState(cancela); // Set the default cancel icon
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
      case "withdraw":
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
      case "withdraw":
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
      case "withdraw":
        setAction(action);
        setContent("Withdraw");
        setMode("text");
        setFontColor("#FF4444");
        setCheck(true);
        setCancelIcon(cancelc);
        break;

      default:
        setContent(null);
        setMode("icons");
        setCheck(false);
        break;
    }
  };

  const [isChecked, setChecked] = useState(false);

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
          onClick={() => handleIconClick("withdraw")}
        >
          <img
            style={{ width: "22px", marginRight: "30px" }}
            src={withdrawIcon}
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
            <div style={{ maxWidth: "90%" }}>{"Pending Approval"}</div>
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

export default PendingTasks;
