import React from "react";
import banner from "./icons/campusbanner.png";
import HorizontalList from "./HorizontalList";

const HomeHeader = () => {
  return (
    <div
      className="image-container"
      style={{
        position: "relative",
        width: "60vw",
        margin: "0 auto", // Center the container horizontally
        borderRadius: "10px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img
        className="background-image"
        src={banner}
        alt="Background"
        style={{
          maxWidth: "100%",
          height: "auto",
          borderRadius: "10px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: "10px",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          color: "white",
          borderBottom: "0.8vw solid white",
        }}
      >
        <div
          style={{
            fontSize: "2.5vw",
            marginLeft: "20px",
            marginBottom: "-30px",
            transform: "translateY(7.7vw)",
          }}
        >
          <HorizontalList
            items={[
              <h1
                style={{
                  fontSize: "2.5vw",
                  margin: 0,
                }}
              >
                My Projects
              </h1>,
              <div
                style={{
                  fontWeight: 300,
                  fontSize: "2.5vw",
                  marginLeft: "30vw",
                }}
              >
                {"22 Aug 2023"}
              </div>,
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
