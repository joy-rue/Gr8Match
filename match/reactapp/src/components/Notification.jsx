import React from "react";
import VerticalList from "./VerticalList";
import SubBanner from "./SubBanner";

const Notification = ({ title, text, date }) => {
  return (
    <div>
      <VerticalList
        spacing={10}
        items={[
          <div style={{ fontWeight: "500" }}>{title}</div>,
          <div
            style={{
              fontSize: "12px", // Adjust the font size as needed
              wordWrap: "break-word",
            }}
          >
            {text.split(" ").slice(0, 20).join(" ")}
          </div>,
          <div
            style={{
              fontSize: "12px",
              fontWeight: "400",
            }}
          >
            {date}
          </div>,
        ]}
      />
    </div>
  );
};

export default Notification;
