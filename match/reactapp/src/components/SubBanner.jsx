// Corrected the component name to start with a capital letter
import React from "react";
import banner from "./icons/sidebanner.png";

const SubBanner = () => {
  return (
    <div >
      <img
        src={banner}
        alt=""
        style={{
          width: "25vw",
          visibility: "visible",
          paddingLeft: "1.2vw",
          paddingRight: "1.2vw",
          backgroundColor: "white",
          borderRadius: "10px",
          // height: "300px",
        }}
      />
    </div>
  );
};

export default SubBanner;
