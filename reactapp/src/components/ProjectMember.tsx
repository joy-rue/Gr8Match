import React from "react";
import HorizontalList from "./HorizontalList";
import VerticalList from "./VerticalList";
import ProfileTab from "./ProfileTab";

interface Props {
  Name: string;
  profile: string;
  role: string;
  active: boolean;
}

const ProjectMember = ({ Name, role, active, profile }: Props) => {
  return (
    <div>
      <HorizontalList
        spacing={10}
        items={[
          <ProfileTab Name={Name} profile={profile} role={role} />,
          <div
            style={{
              fontWeight: "600",
              color: "#D5B02C",
              transform: "translateY(10px)",
            }}
          >
            {active === true ? (
              <div style={{ fontWeight: "600", color: "#06B217" }}>
                <HorizontalList
                  spacing={7}
                  items={[
                    <div
                      style={{
                        width: "7px",
                        height: "7px",
                        borderRadius: "50%",
                        backgroundColor: "#06B217",
                        transform: "translateY(11px)",
                      }}
                    ></div>,
                    "active",
                  ]}
                />
              </div>
            ) : (
              <div style={{ fontWeight: "600", color: "#C2BEBE" }}>
                <HorizontalList
                  spacing={7}
                  items={[
                    <div
                      style={{
                        width: "7px",
                        height: "7px",
                        borderRadius: "50%",
                        backgroundColor: "#C2BEBE",
                        transform: "translateY(11px)",
                      }}
                    ></div>,
                    "no longer active",
                  ]}
                />
              </div>
            )}
          </div>,
        ]}
      />
    </div>
  );
};

export default ProjectMember;
