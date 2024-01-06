import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import VerticalList from "./VerticalList";
import HorizontalList from "./HorizontalList";

const ProjectHeaderContent = ({
  Duration,
  TimeLeft,
  Description,
  Date,
  title,
  People,
  Progress,
  profile,
  banner,
}) => {




  return (
    <div style={{ position: "relative" }}>
      {/* Existing content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "60vw",
        }}
      >
        {/* Banner */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            flex: "1", // Take 1/3 of the available vertical space
          }}
        >
          <img
            src={banner}
            className="card-img-top"
            alt="Banner"
            style={{
              width: "100%",
            }}
          />
        </div>

        {/* Content */}
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            marginTop: "-30px",
            flex: "2", // Take 2/3 of the available vertical space
          }}
        >
          {/* Profile and project details */}
          <VerticalList
            spacing={10}
            items={[
              <div>
                {profile ? (
                  <img
                    src={profile}
                    alt="Profile"
                    className="card-img-top"
                    style={{
                      width: "9vw",
                      height: "9vw",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "3px solid white",
                      position: "relative",
                      zIndex: 2,
                      marginBottom: "-10%",
                      marginTop: "-20%",
                    }}
                  />
                ) : (
                  <div style={{ margin: "31px" }}></div>
                )}
              </div>,
              <div
                style={{
                  fontSize: "27px",
                  fontWeight: "400",
                }}
              >
                {title}
              </div>,
              <div>
                {People && <HorizontalList spacing={10} items={People} />}
              </div>,
              <div>
                {Duration && (
                  <HorizontalList
                    spacing={20}
                    items={[
                      <div>{Duration}</div>,
                      <div style={{ color: "#0A66C2" }}>{TimeLeft}</div>,
                    ]}
                  />
                )}
              </div>,

              <HorizontalList
                spacing={20}
                items={[
                  <div style={{
                    fontSize: "14px",
                  }}>{Description}</div>,
                  <div
                    style={{
                      marginLeft: "40px",
                      width: "200px",
                      transform: "translate(-10%,-15%)",
                    }}
                  >
                    {Progress && (
                      <ProgressBar
                        title={
                          <div
                            style={{ fontSize: "18px", paddingBottom: "5px" }}
                          >
                            <span style={{ fontWeight: "600" }}>
                              Progress :{" "}
                            </span>
                            {Progress}% complete
                          </div>
                        }
                        percentage={Progress}
                        date={Date}
                      />
                    )}
                  </div>,
                ]}
              />,
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectHeaderContent;
