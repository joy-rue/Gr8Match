import React from "react";
import { Link } from "react-router-dom";
// import HorizontalList from "./HorizontalList";
// import VerticalList from "./VerticalList";

const TaskContent = ({ title, dueDate, dateCompleted, completed }) => {
  return (
    <Link
      to="/ratask"
      style={{
        textDecoration: "none" /* Remove underline */,
        color: "inherit",
        fontWeight: "inherit",
      }}
    >
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
          <div style={{ marginRight: "30px" }}>
            {completed === true && dateCompleted ? (
              <div>{dateCompleted}</div>
            ) : (
              <div>{dueDate}</div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TaskContent;
