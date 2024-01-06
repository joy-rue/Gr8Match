import React from "react";
import HorizontalList from "./HorizontalList";
import VerticalList from "./VerticalList";

const TaskContent = ({ title, dueDate, dateCompleted, completed }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ minWidth: "70%", fontWeight: "500" }}>
          {`${title} `}
        </div>
        <div style={{ marginRight:"30px" }}>
          {completed === true && dateCompleted ? (
            <div>{dateCompleted}</div>
          ) : (
            <div>{dueDate}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskContent;
