import React from "react";

const ProgressBar = ({ title, percentage, date }) => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <p>
          <strong>{`${title}: `}</strong>
        </p>
        <p style={{ marginLeft: "10px" }}>{`${percentage}% Complete`}</p>
      </div>
      <div
        style={{
          width: "100%",
          height: "10px",
          borderRadius: "5px",
          overflow: "hidden",
          background: "#E0DFDC",
          transform: "TranslateY(-7px)",
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            height: "100%",
            backgroundColor: "#4CAF50",
            borderRadius: "5px",
          }}
        ></div>
      </div>
      <div style={{ fontWeight: 300, fontSize: "24px" }}>{date}</div>
    </div>
  );
};

export default ProgressBar;
