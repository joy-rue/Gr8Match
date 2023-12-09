import React, { ReactNode } from "react";

interface IconitemProp {
  icon: string;
  item: ReactNode;
}

export const IconItem = ({ icon, item }: IconitemProp) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src={icon} alt="" style={{ width: "20px" }} />
      <div style={{ marginLeft: "7px" }}>{item}</div>
    </div>
  );
};
