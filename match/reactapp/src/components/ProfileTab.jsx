import React from "react";
import HorizontalList from "./HorizontalList";
import VerticalList from "./VerticalList";

const ProfileTab = ({ Name, role, profile }) => {
  return (
    <div>
      <HorizontalList
        spacing={10}
        items={[
          <img
            src={profile}
            alt=""
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              transform: "translateY(3px)",
            }}
          />,
          <div style={{ fontSize: "15px" }}>
            <VerticalList
              spacing={5}
              items={[
                <div style={{ fontWeight: "500" }}>{Name}</div>,
                <div
                  style={{ transform: "translateY(-5px)", fontSize: "13px" }}
                >
                  {role}
                </div>,
              ]}
            />
          </div>,
        ]}
      />
    </div>
  );
};

export default ProfileTab;
