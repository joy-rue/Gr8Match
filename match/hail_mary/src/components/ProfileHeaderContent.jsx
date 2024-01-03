import React from "react";
import HorizontalList from "./HorizontalList";
import clockicon from "./icons/clockicon.png";
import IconItem from "./IconItem";
import phoneicon from "./icons/phone.png";
import emailicon from "./icons/email.png";

const ProfileHeaderContent = ({
  Department,
  workhours,
  Description,
  contact,
  email,
}) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flex: "column",
          left: "0",
          marginTop: "15px",
        }}
      >
        <div style={{ width: "60%" }}>
          <HorizontalList
            spacing={40}
            items={[
              <div>{Department}</div>,
              <div style={{ color: "#0A66C2", fontWeight: "500" }}>
                <IconItem icon={clockicon} item={`${workhours}hrs/wk`} />
              </div>,
            ]}
          />
          <div style={{ marginTop: "10px", marginBottom: "10px" }}>
            {Description}
          </div>
          <HorizontalList
            spacing={40}
            items={[
              <div style={{ color: "#0A66C2" }}>
                <IconItem icon={emailicon} item={email} />
              </div>,
              <div style={{ color: "#0A66C2" }}>
                <IconItem icon={phoneicon} item={contact} />
              </div>,
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileHeaderContent;
