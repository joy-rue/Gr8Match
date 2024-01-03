import React from "react";
import HorizontalList from "./HorizontalList";
import VerticalList from "./VerticalList";


const ProfileTab = ({ Name, role, profile }) => {
  return (
    <div>
      <HorizontalList
        spacing={15}
        items={[
          <img
            src={profile}
            alt=""
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              transform: "translateY(3px)",
            }}
          />,
          <div>
            <VerticalList
              spacing={5}
              items={[
                <div style={{ fontWeight: "600" }}>{Name}</div>,
                <div style={{ transform: "translateY(-5px)" }}>{role}</div>,
              ]}
            />
          </div>,
        ]}
      />
    </div>
  );
};

export default ProfileTab;
