import ashesilogo from "../assets/ashesilogo.png";
import { Sidemenu } from "./Sidemenu";

export const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "#F3F2EF",
        width: "100%",
        height: "100%",
        position: "fixed",
        top: "0",
      }}
    >
      <div
        style={{
          top: "0",
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "10px",
          paddingBottom: "10px",
          width: "100%",
          backgroundColor: "white",
          zIndex: "1",
          left: "0",
        }}
      >
        <img src={ashesilogo} alt="Ashesi Logo" style={{ width: "150px" }} />
      </div>
      <Sidemenu />
    </div>
  );
};
