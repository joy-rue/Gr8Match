import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavOption from "./NavOption";
import home from "./icons/home.png";
import explore from "./icons/explore.png";
import profile from "./icons/profile.png";
import help from "./icons/help.png";
import todo from "./icons/todo.png";
import logout from "./icons/Logout.png";
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
            <Link to="/"  style={{textDecoration: "none", color: "inherit", fontWeight:"inherit",}}>
              <MenuItem style={{ paddingBottom: "40px", paddingTop: "50px" }}>
                <NavOption Icon={home} title={"Home"} />
              </MenuItem>
            </Link>
            <Link to="/explore" style={{textDecoration: "none", color: "inherit", fontWeight:"inherit",}}>
              <MenuItem style={{ paddingBottom: "40px", paddingTop: "50px" }}>
                <NavOption Icon={explore} title={"Explore"} />
              </MenuItem>
            </Link>
            {/* Add other links as needed */}
            <Link to="/todo" style={{textDecoration: "none", color: "inherit", fontWeight:"inherit",}}>
              <MenuItem style={{ paddingBottom: "40px", paddingTop: "50px" }}>
                <NavOption Icon={todo} title={"To-do"} />
              </MenuItem>
            </Link>
            <Link to="/profile" style={{textDecoration: "none", color: "inherit", fontWeight:"inherit",}}>
              <MenuItem style={{ paddingBottom: "40px", paddingTop: "50px" }}>
                <NavOption Icon={profile} title={"Profile"} />
              </MenuItem>
            </Link>
            <Link to="/help" style={{textDecoration: "none", color: "inherit", fontWeight:"inherit",}}>
              <MenuItem style={{ paddingBottom: "40px", paddingTop: "50px" }}>
                <NavOption Icon={help} title={"Help"} />
              </MenuItem>
            </Link>
            <Link to="/login" >
              <MenuItem style={{ paddingBottom: "40px", paddingTop: "50px" }}>
                <NavOption Icon={logout} title={"Logout"} />
              </MenuItem>
            </Link>
          </Menu>
        </div>
      </Sidebar>
  );
};
