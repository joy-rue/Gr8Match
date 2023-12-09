import { ElementType } from "react";
import ashesilogo from "../assets/ashesilogo.png";
import { Sidemenu } from "./Sidemenu";

interface PageBody {
  Page: ElementType;
}

export const Header = ({ Page }: PageBody) => {
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
      >
        {" "}
      </div>
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
      <Page style={{ transform: "translateY(-40px)" }} />
    </div>
  );
};
