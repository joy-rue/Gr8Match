import React from "react";
import HorizontalList from "./HorizontalList";
import ProfileTab from "./ProfileTab";


const ProjectMember = ({ Name, role, active, profile }) => {
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
