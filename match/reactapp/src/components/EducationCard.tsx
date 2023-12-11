import React from "react";
import HorizontalList from "./HorizontalList";
import VerticalList from "./VerticalList";

interface Props {
  Institution: string;
  profile: string;
  Award: string;
  Date: string;
}

const ProfileTab = ({ Institution, Award, profile, Date }: Props) => {
  return (
    <div>
      <HorizontalList
        spacing={20}
        items={[
          <img
            src={profile}
            alt=""
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "20%",
              transform: "translateY(10px)",
            }}
          />,
          <div>
            <VerticalList
              spacing={1}
              items={[
                <div style={{ fontWeight: "600" }}>{Institution}</div>,
                <div>{Award}</div>,
                <div>{Date}</div>,
              ]}
            />
          </div>,
        ]}
      />
    </div>
  );
};

export default ProfileTab;
