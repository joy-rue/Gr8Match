import React, { ReactNode, useRef, useEffect } from "react";
import ashesilogo from "./icons/ashesilogo.png";
import { Sidemenu } from "./Sidemenu";

const Header = ({ Page }) => {
  const screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const screencenter = screenWidth * 0.5;

  return (
    <div>
      <div
        style={{
          backgroundColor: "#F3F2EF",
          width: "100%",
          height: "100%",
          position: "fixed",
          top: "0",
        }}
      />
      <div
        style={{
          top: "0",
          display: "flex",
          position: "fixed",
          justifyContent: "space-evenly",
          paddingTop: "10px",
          paddingBottom: "10px",
          width: "100%",
          backgroundColor: "white",
          zIndex: "999",
          left: "0",
        }}
      >
        <img src={ashesilogo} alt="Ashesi Logo" style={{ width: "150px" }} />
      </div>
      <Sidemenu />
      <div
        style={{
          transform: "translate(50px, 75px)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {Page}
      </div>
    </div>
  );
};

export default Header;