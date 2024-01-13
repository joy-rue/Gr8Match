import React from "react";
import ashesilogo from "./components/icons/ashesilogo.png";
import { Sidemenu } from "./components/Sidemenu";
import HorizontalList from "./components/HorizontalList";
import PopUpForm from "./components/PopUpForm";

const Header = ({ Page }, PopUpisOpen, PopUpFormContent, PopUptitle) => {
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
      // style={{
      //   paddingBottom: "10vh",
      //   backgroundColor: "red",
      // }}
      >
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
            zIndex: "1002",
            left: "0",
          }}
        >
          <img src={ashesilogo} alt="Ashesi Logo" style={{ height: "35px" }} />
        </div>
      </div>

      <HorizontalList
        items={[
          <Sidemenu key="sidemenu" />,

          <div
            key="page"
            style={{
              // width: "60vw",
              minHeight: "100vh",
              marginLeft: "-120px",
              transform: "translateY(10vh)",
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
