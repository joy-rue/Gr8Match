import React, { ElementType } from "react";
import "./NavOption.css";



const NavOption=({ Icon, title }) =>{
  return (
    <div className="navOption">
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
}

export default NavOption;