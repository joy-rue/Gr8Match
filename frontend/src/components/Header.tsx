// import React from "react";
import "./Header.css";
import ashesilogo from "../assets/ashesilogo.png";
// import SearchIcon from "@material-ui/icons/Search";
// import { NavOption } from "./NavOption";
// import HomeIcon from "@material-ui/icons/Home";
// import FolderIcon from "@material-ui/icons/Folder";
// import CheckCircleIcon from "@material-ui/icons/CheckCircle";
// import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

export const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img src={ashesilogo} alt="Ashesi Logo" style={{ width: "100px" }} />

        {/* <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div> */}
      </div>
      {/* <div className="header__right">
        <NavOption Icon={HomeIcon} title={"Home"} />
        <NavOption Icon={FolderIcon} title={"Explore"} />
        <NavOption Icon={CheckCircleIcon} title={"To-do"} />
        <NavOption Icon={AccountCircleIcon} title={"Profile"} />
        <NavOption Icon={HelpOutlineIcon} title={"Help"} />
      </div> */}
    </div>
  );
};
