import React from "react";
import ProgressBar from "./ProgressBar";

interface Props {
  Duration: string;
  TimeLeft: String;
  Description: string;
  Date: string;
  Progress: number;
}

export const ProjectHeaderContent = ({
  Duration,
  TimeLeft,
  Description,
  Date,
  Progress,
}: Props) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flex: "column",
          left: "0",
        }}
      >
        <div style={{ width: "60%" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>{Duration}</div>
            <div style={{ marginLeft: "20px", color: "#0A66C2" }}>
              {TimeLeft}
            </div>
          </div>
          <div style={{ marginTop: "10px" }}>{Description}</div>
        </div>
        <div style={{ width: "25%", marginLeft: "80px" }}>
          <ProgressBar title="Progress" percentage={Progress} date={Date} />
        </div>
      </div>
    </div>
  );
};