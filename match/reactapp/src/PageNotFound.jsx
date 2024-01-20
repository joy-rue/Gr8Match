import React, { useState, useEffect } from "react";
import axios from "axios";
import HorizontalList from "./components/HorizontalList";
import VerticalList from "./components/VerticalList";
import HomeHeader from "./components/HomeHeader";
import Header from "./Header";
import SubListCard from "./components/SubListCard";
import addicon from "./components/icons/addicon.png";
import ProjectCardList from "./components/ProjectCardList";
import Notification from "./components/Notification";
import { Link } from "react-router-dom";
import NotificationsList from "./components/NotificationsList";
import SubBanner from "./components/SubBanner";
import ProjectCard from "./components/ProjectCard";
import { useAuth } from "./AuthContext";
import { AuthProvider } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import sidebanner from "./components/icons/sidebanner.png";

const PageNotFound = () => {
  return (
    <div>
      <Header
        Page={[
          <HomeHeader
            key="homeHeader"
            title={"404 Page Not Found"}
            spacing={"320px"}
          />,
        ]}
      />
    </div>
  );
};

export default PageNotFound;
