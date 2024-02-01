import React, { useState, useRef } from "react";
import HorizontalList from "./HorizontalList";
import disapproveIcon from "./icons/withdrawIcon.png";
import approveIcon from "./icons/approveIcon.png";
import cancela from "./icons/cancela.png";
import cancelc from "./icons/cancelc.png";
import ListCard from "./ListCard";
import { useNavigate } from "react-router-dom";

const ApproveTask = ({items}) => {
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
      case "approve":
        setMode("icons");
        setCheck(false);
        checkedItemsToPrint.forEach((item) => {
          console.log(`approve: ${item}`);
        });
        break;
      case "disapprove":
        setMode("icons");
        setCheck(false);
        checkedItemsToPrint.forEach((item) => {
          console.log(`disapprove: ${item}`);
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
      case "approve":
        setMode("icons");
        setCheck(false);
        console.log(action);
        break;
      case "disapprove":
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
            <div style={{ maxWidth: "90%" }}>
              {"Pending Approval"}
            </div>
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

export default ApproveTask;
