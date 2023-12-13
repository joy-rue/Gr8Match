import React from "react";
import ashesilogo from "./icons/ashesilogo.png";
import { Sidemenu } from "./Sidemenu";
import HorizontalList from "./HorizontalList";

const Header = ({ Page }) => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#F3F2EF",
          width: "100%",
          height: "100vh", // Use viewport height
          position: "fixed",
          top: "0",
        }}
      />
      <div
        style={{
          top: "0",
          display: "flex",
          position: "fixed",
          justifyContent: "center",
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
      <HorizontalList
        items={[
          <Sidemenu />,
          <div
            style={{
              minHeight: "100vh",
              transform: "translate(-120px,10vh)",
            }}
          >
            {Page}
          </div>,
        ]}
      />
    </div>
  );
};

export default Header;
