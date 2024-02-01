import React, { useState } from "react";
import HorizontalList from "./HorizontalList";
import VerticalList from "./VerticalList";
import clockicon from "./icons/clockicon.png";
import IconItem from "./IconItem";
import { Link } from "react-router-dom";

const ApplytoProject = ({
  id,
  profile,
  title,
  dueDate,
  People,
  workhours,
  description,
  isActive,
}) => {
  const [applicationStatus, setApplicationStatus] = useState("pending");

  const handleApplyClick = () => {
    setApplicationStatus((prevStatus) =>
      prevStatus === "pending" ? "applied" : "pending"
    );
    
  };

  return (
    <Link
      to="/exploreproject"
      style={{
        textDecoration: "none" /* Remove underline */,
        color: "inherit",
        fontWeight: "inherit",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "60vw",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "15px",
        }}
        className="card"
      >
        <div style={{ maxWidth: "50vw", marginTop: "5px" }}>
          <HorizontalList
            spacing={10}
            items={[
              <img
                src={profile}
                alt=""
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  transform: "translateY(20px) ",
                }}
              />,
              <VerticalList
                spacing={10}
                items={[
                  <div style={{ fontSize: "22px", fontWeight: "500" }}>
                    {title}{" "}
                  </div>,

                  <HorizontalList
                    spacing={40}
                    items={[
                      <div style={{ fontWeight: "350" }}>{dueDate}</div>,
                      <div style={{ color: "#0A66C2", fontWeight: "500" }}>
                        <IconItem
                          icon={clockicon}
                          item={`${workhours}hrs/wk`}
                        />
                      </div>,
                    ]}
                  />,
                  <div style={{ fontSize: "12px" }}>
                    <HorizontalList spacing={10} items={People} />
                  </div>,
                  <div
                    style={{
                      width: "100%",
                      fontSize: "12px", 
                      wordWrap: "break-word",
                    }}
                  >
                    {description}
                  </div>,
                ]}
              />,
            ]}
          />
        </div>
      </div>
    </Link>
  );
};

export default ApplytoProject;
