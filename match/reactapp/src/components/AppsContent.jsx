import React from "react";
import HorizontalList from "./HorizontalList";
import VerticalList from "./VerticalList";
<<<<<<< HEAD

const AppsContent = ({ profile, title, descr }) => {
   return (
=======
import { Link } from "react-router-dom";
import ReactDOMServer from "react-dom/server";

const AppsContent = ({ link, profile, title, descr }) => {
  return (
>>>>>>> fa9007de822d3fd50ac08af696e85c7cb86ab5a1
    <div>
      <HorizontalList
        spacing={10}
        items={[
          <img
            src={profile}
            alt=""
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "20%",
              transform: "translateY(20px) ",
            }}
          />,
          <VerticalList
            spacing={10}
            items={[
              <div style={{ fontWeight: "500" }}>{title}</div>,
              <div
                style={{
                  width: "60%",
                  fontSize: "12px", // Adjust the font size as needed
                  wordWrap: "break-word",
                }}
              >
                {descr}
              </div>,
            ]}
          />,
        ]}
      />
    </div>
  );
};

export default AppsContent;
