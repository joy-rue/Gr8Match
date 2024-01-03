import React, { ReactNode } from "react";


const IconItem = ({ icon, item }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src={icon} alt="" style={{ width: "20px" }} />
      <div style={{ marginLeft: "7px" }}>{item}</div>
    </div>
  );
};


export default IconItem;