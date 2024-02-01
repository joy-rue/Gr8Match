import React from "react";

const NavOption = ({ Icon, title }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "black",
        cursor: "pointer",
      }}
    >
      {typeof Icon === "string" ? (
        <img
          src={Icon}
          alt="Icon"
          className="navOption__image"
          style={{ width: "40px" }}
        />
      ) : (
        Icon && <Icon className="navOption__icon" />
      )}
      <h6 className="navOption__title">{title}</h6>
    </div>
  );
};

export default NavOption;
