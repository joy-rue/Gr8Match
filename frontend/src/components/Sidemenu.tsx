import React from "react";
import "./Header.css";
import { NavOption } from "./NavOption";
import HomeIcon from "@material-ui/icons/Home";
import FolderIcon from "@material-ui/icons/Folder";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

// export const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <div className="navoption">
//         <NavOption Icon={HomeIcon} title={"Home"} />
//         <NavOption Icon={FolderIcon} title={"Explore"} />
//         <NavOption Icon={CheckCircleIcon} title={"To-do"} />
//         <NavOption Icon={AccountCircleIcon} title={"Profile"} />
//         <NavOption Icon={HelpOutlineIcon} title={"Help"} />
//       </div>
//     </div>
//   );
// };

import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import { Link } from "react-router-dom";

export const Sidemenu = () => {
  return (
    <Sidebar
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: "white",
          height: "100vh",
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
          flex: "even",
          width: "100px",
          // borderTopRightRadius: "10px",
          // borderBottomRightRadius: "10px",
        },
      }}
    >
      <Menu
        menuItemStyles={{
          button: {
            // the active class will be added automatically by react router
            // so we can use it to style the active menu item
            [`&.active`]: {
              backgroundColor: "#13395e",
              color: "#b6c8d9",
              position: "absolute",
            },
          },
        }}
      >
        <MenuItem
          style={{
            marginBottom: "10px",
            paddingBottom: "30px",
            paddingTop: "30px",
          }}
        >
          {<NavOption Icon={HomeIcon} title={"Home"} />}
        </MenuItem>
        <MenuItem
          style={{
            marginBottom: "10px",
            paddingBottom: "30px",
            paddingTop: "30px",
          }}
        >
          {<NavOption Icon={FolderIcon} title={"Explore"} />}
        </MenuItem>
        <MenuItem
          style={{
            marginBottom: "10px",
            paddingBottom: "30px",
            paddingTop: "30px",
          }}
        >
          {<NavOption Icon={CheckCircleIcon} title={"To-do"} />}
        </MenuItem>
        <MenuItem
          style={{
            marginBottom: "10px",
            paddingBottom: "30px",
            paddingTop: "30px",
          }}
        >
          {<NavOption Icon={AccountCircleIcon} title={"Profile"} />}{" "}
        </MenuItem>
        <MenuItem
          style={{
            marginBottom: "10px",
            paddingBottom: "30px",
            paddingTop: "30px",
          }}
        >
          {<NavOption Icon={HelpOutlineIcon} title={"Help"} />}{" "}
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};
