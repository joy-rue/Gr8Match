import React, { useState, useRef } from "react";
import HorizontalList from "./HorizontalList";
import addIcon from "./icons/add_Icon.png";
import withdrawIcon from "./icons/withdrawIcon.png";
import submitIcon from "./icons/submitIcon.png";
import cancela from "./icons/cancela.png";
import cancelb from "./icons/cancelb.png";
import cancelc from "./icons/cancelc.png";
import ListCard from "./ListCard";
import TaskContent from "./TaskContent";

const PendingTasks = () => {
  const [content, setContent] = useState(null);
  const [check, setCheck] = useState(false);
  const [mode, setMode] = useState("icons");
  const [fontColor, setFontColor] = useState(null);
  const [cancelIcon, setCancelIcon] = useState(cancela); // Set the default cancel icon
  const [action, setAction] = useState(null); // Set the default cancel icon
  const submitRef = useRef(null);
  const Task = (
    <TaskContent
      title={"Create research Survey You have no Tasks You have no Tasks"}
      dueDate={"22 Aug 2023"}
      dateCompleted={"1 Dec 2023"}
      completed={true}
    />
  );

  const items = [Task, Task, Task];

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

  const handleSelectItem = (item) => {
    console.log(`Selected item: ${item}`);
  };

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
        onSelectItem={handleSelectItem}
        showCheckbox={check}
        submitOperation={handleSubmitOperation}
        ref={submitRef}
      />
    </div>
  );
};

export default PendingTasks;
