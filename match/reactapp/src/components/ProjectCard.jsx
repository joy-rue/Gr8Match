import React from "react";
import ProfileTab from "./ProfileTab";
import ashesilogoblank from "./icons/ashesiblanklogo.png";
import ProgressBar from "./ProgressBar";
import VerticalList from "./VerticalList";
import HorizontalList from "./HorizontalList";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, progress, milestone, dueDate, timeleft }) => {
  return (
    <Link
      to="/project"
      style={{
        textDecoration: "none" /* Remove underline */,
        color: "inherit",
        fontWeight: "inherit",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          paddingLeft: "30px",
          paddingRight: "30px",
          paddingTop: "15px",
          paddingBottom: "15px",
          borderRadius: "15px",
          maxWidth: "26vw",
          minWidth: "420px",
        }}
      >
        <VerticalList
          items={[
            <div
              style={{
                borderBottom: "2px solid rgba(0, 0, 0, 0.2)",
                paddingBottom: "7px",
              }}
            >
              <ProfileTab
                Name={
                  <div
                    style={{
                      fontSize: "16.5px",
                      fontWeight: "500",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {title.length > 35 ? `${title.substring(0, 35)}...` : title}
                  </div>
                }
                role={
                  <ProgressBar
                    title={
                      <div style={{ marginBottom: "7px" }}>
                        <HorizontalList
                          spacing={10}
                          items={[
                            <div
                              style={{ fontSize: "14px", fontWeight: "600" }}
                            >
                              {"Progress : "}
                            </div>,
                            <div
                              style={{ fontSize: "14px" }}
                            >{`${progress}% complete`}</div>,
                          ]}
                        />
                      </div>
                    }
                    percentage={progress}
                    //  date={Date}
                  />
                }
                // active={false}
                profile={ashesilogoblank}
              />
            </div>,
            <div style={{ color: "rgba(0, 0, 0, 0.5)", paddingTop: "10px" }}>
              Current Milestone
            </div>,
            <div
              style={{
                fontSize: "16px",
              }}
            >
              <HorizontalList
                spacing={10}
                items={[
                  <div
                    style={{
                      fontWeight: "500",
                      paddingLeft: "10px",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      width: "170px",
                    }}
                  >
                    {milestone.length > 20
                      ? `${milestone.substring(0, 20)}...`
                      : milestone}
                  </div>,
                  <div style={{ width: "100px" }}>{dueDate}</div>,
                  <div style={{ fontWeight: "500", color: "#0A66C2" }}>
                    {timeleft}
                  </div>,
                ]}
              />
            </div>,
          ]}
        />
      </div>
    </Link>
  );
};

export default ProjectCard;
