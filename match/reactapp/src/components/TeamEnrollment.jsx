import React from "react";
import ProfileTab from "./ProfileTab";
import HorizontalList from "./HorizontalList";
import accept from "./icons/accept.png";
import decline from "./icons/decline.png";

export const TeamEnrollment = ({ Name, Role, Profile }) => {
  return (
    <div>
      <HorizontalList
        spacing={15}
        items={[
          <div style={{ width: "200px" }}>
            <ProfileTab Name={Name} role={Role} profile={Profile} />
          </div>,
          <img
            src={decline}
            alt=""
            style={{ width: "25px", marginTop: "10px" }}
          />,
          <img
            src={accept}
            alt=""
            style={{ width: "25px", marginTop: "10px" }}
          />,
        ]}
      />
    </div>
  );
};
