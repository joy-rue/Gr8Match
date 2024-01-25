import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavOption from "./components/NavOption";
import home from "./components/icons/home.png";
import explore from "./components/icons/explore.png";
import profile from "./components/icons/profile.png";
import help from "./components/icons/help.png";
import todo from "./components/icons/todo.png";
import logout from "./components/icons/logout.png";
import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import axios from "axios";
import Cookies from "js-cookie";
import moment from "moment";

const Sidemenu = () => {
  const [user,setUser] = useState(null);

  useEffect(()=>{

    const fetchUserId = async ()=>{
      try {
        const accessToken = Cookies.get("access");
        if (accessToken){
          const userIdResponse =  await axios.get(
            "http://127.0.0.1:5173/api/account/user/",
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          
          if(userIdResponse.status == 200){
            const allUserData= userIdResponse.data;
            setUser(allUserData);
            console.log(allUserData);
            console.log(user);
          }else{
            console.log("Could not fetch data")
          }
        }else{
          handleTokenRefresh();
        }
      }catch(error){
        console.error("Error parsing JSON:", error);
      }

    }
    fetchUserId();

  },[]

  );

  const handleTokenRefresh = async () => {
    try {
      // Make a request to your backend to refresh the access token using the refresh token
      const refreshResponse = await axios.post(
        "http://127.0.0.1:5173/api/account/refresh/",
        {
          refresh: Cookies.get("refresh"),
        }
      );

      const newAccessToken = refreshResponse.data.access;

      // Update the access token in cookies
      Cookies.set("access", newAccessToken);

      // Retry the original API request with the new access token
      await fetchData();
    } catch (error) {
      console.error("Error refreshing token:", error);
    }
  };

 console.log(user);

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
          <MenuItem
            style={{ paddingBottom: "40px", paddingTop: "50px" }}
            component={<Link to="/" />}
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
            component={<Link to={`/profile/${user?.id}`} />}
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
            component={<Link to="/login" />}
          >
            <NavOption Icon={logout} title={"Logout"} />
          </MenuItem>
        </Menu>
      </div>
    </Sidebar>
  );
};

export default Sidemenu;
