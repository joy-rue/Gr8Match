import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavOption from "./NavOption";
import home from "./icons/home.png";
import explore from "./icons/explore.png";
import profile from "./icons/profile.png";
import help from "./icons/help.png";
import todo from "./icons/todo.png";
import logout from "./icons/logout.png";
import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";

export const Sidemenu = () => {
  return (
    <Sidebar
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          position: "fixed",
          top: "0",
          height: "100vh",
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
          width: "100px",
          backgroundColor: "rgba(255, 255, 255, 0)",
          zIndex: "1003",
        },
      }}
    >
      <div
        style={{
          marginTop: "15px",
          backgroundColor: "white",
          height: "82vh",
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
      >
        <Menu>
          <MenuItem style={{ paddingBottom: "40px", paddingTop: "50px" }}>
            <Link to="/">
              <NavOption Icon={home} title={"Home"} />
            </Link>
          </MenuItem>
          <MenuItem style={{ paddingBottom: "40px", paddingTop: "50px" }}>
            <Link to="/explore">
              <NavOption Icon={explore} title={"Explore"} />
            </Link>
          </MenuItem>
          {/* Add other links as needed */}
          <MenuItem style={{ paddingBottom: "40px", paddingTop: "50px" }}>
            <Link to="/todo">
              <NavOption Icon={todo} title={"To-do"} />
            </Link>
          </MenuItem>
          <MenuItem style={{ paddingBottom: "40px", paddingTop: "50px" }}>
            <Link to="/profile">
              <NavOption Icon={profile} title={"Profile"} />
            </Link>
          </MenuItem>
          <MenuItem style={{ paddingBottom: "40px", paddingTop: "50px" }}>
            <Link to="/help">
              <NavOption Icon={help} title={"Help"} />
            </Link>
          </MenuItem>
          <MenuItem style={{ paddingBottom: "40px", paddingTop: "50px" }}>
            <Link to="/login">
              <NavOption Icon={logout} title={"Logout"} />
            </Link>
          </MenuItem>
        </Menu>
      </div>
    </Sidebar>
  );
};
