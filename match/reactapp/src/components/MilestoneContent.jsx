import React from "react";
import HorizontalList from "./HorizontalList";
import VerticalList from "./VerticalList";

const MilestoneContent = ({
  profile,
  title,
  dueDate,
  timeleft,
  People,
  description,
  
}) => {
  return (
    <div style={{ maxWidth: "50vw" }}>
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
              <HorizontalList
                spacing={20}
                items={[
                  <div style={{ fontWeight: "500" }}>{`${title}`}</div>,
                  <div style={{ fontWeight: "350" }}>{dueDate}</div>,
                  <div style={{ color: "#0A66C2", fontWeight: "500" }}>
                    {timeleft}
                  </div>,
                ]}
              />,
              <div style={{ fontSize: "12px" }}>
                <HorizontalList spacing={10} items={People} dot_separation={true}/>
              </div>,
              <div
                style={{
                  width: "100%",
                  fontSize: "12px", // Adjust the font size as needed
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
  );
};

export default MilestoneContent;