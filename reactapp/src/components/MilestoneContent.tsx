import React from "react";
import HorizontalList from "./HorizontalList";
import ashesiblanklogo from "./icons/ashesiblanklogo.png";
import VerticalList from "../VerticalList";

interface Props {
  profile: string;
  title: string;
  dueDate: string;
  timeleft: string;
  People: string[];
  description: string;
}

export const MilestoneContent = ({
  profile,
  title,
  dueDate,
  timeleft,
  People,
  description,
}: Props) => {
  return (
    <div style={{ maxWidth: "50vw" }}>
      <HorizontalList
        items={[
          <img
            src={profile}
            alt=""
            style={{ width: "50px", borderRadius: "50%" }}
          />,
          <VerticalList
            items={[
              <HorizontalList
                items={[
                  <h3>{`${title}-`}</h3>,
                  <div>{dueDate}</div>,
                  <div>{timeleft}</div>,
                ]}
              />,
              People,
              <div
                style={{
                  width: "60%",
                  fontSize: "16px", // Adjust the font size as needed
                  wordWrap: "break-word",
                }}
              >
                {description}
              </div>,
            ]}
          />,
        ]}
      />
      ,
    </div>
  );
};
