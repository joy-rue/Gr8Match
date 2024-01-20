import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavOption from "./components/NavOption";
import home from "./components/icons/home.png";
import explore from "./components/icons/explore.png";
import profile from "./components/icons/profile.png";
import help from "./components/icons/help.png";
import todo from "./components/icons/todo.png";
import logout from "./components/icons/logout.png";
import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";

const Sidemenu = () => {
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
          // zIndex: "1003",
        },
      }}
    >
      <div
        style={{
          marginTop: "15px",
          backgroundColor: "white",
          height: "610px",
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
      >
        <Menu>
          <MenuItem
            style={{ paddingBottom: "40px", paddingTop: "50px" }}
            component={<Link to="/home" />}
          >
            <NavOption Icon={home} title={"Home"} />
          </MenuItem>
          <MenuItem
            style={{ paddingBottom: "40px", paddingTop: "50px" }}
            component={<Link to="/explore" />}
          >
            <NavOption Icon={explore} title={"Explore"} />
          </MenuItem>
          <MenuItem
            style={{ paddingBottom: "40px", paddingTop: "50px" }}
            component={<Link to="/todo" />}
          >
            <NavOption Icon={todo} title={"To-do"} />
          </MenuItem>
          <MenuItem
            style={{ paddingBottom: "40px", paddingTop: "50px" }}
            component={<Link to="/profile" />}
          >
            <NavOption Icon={profile} title={"Profile"} />
          </MenuItem>
          <MenuItem
            style={{ paddingBottom: "40px", paddingTop: "50px" }}
            component={<Link to="/help" />}
          >
            <NavOption Icon={help} title={"Help"} />
          </MenuItem>
          <MenuItem
            style={{ paddingBottom: "40px", paddingTop: "50px" }}
            component={<Link to="/" />}
          >
            <NavOption Icon={logout} title={"Logout"} />
          </MenuItem>
        </Menu>
      </div>
    </Sidebar>
  );
};

export default Sidemenu;
