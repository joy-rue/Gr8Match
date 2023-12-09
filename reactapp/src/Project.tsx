import React from "react";
import ashesibanner from "./assets/ashesibanner.png";
import groupprofile from "./components/icons/groupprofile.jpg";
import sidebanner from "./components/icons/sidebanner.png";

import email from "./components/icons/email.png";
import { ProfileCard } from "./components/ProfileCard";
import { IconItem } from "./components/IconItem";
import ProgressBar from "./components/ProgressBar";
import { ProjectHeaderContent } from "./components/ProjectHeaderContent";

const MyComponent = (
  <ProjectHeaderContent
    Duration={"Aug 2023 - Jun 2024"}
    TimeLeft={"1yr 3months"}
    Description={
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibuseros eu vehicula interdum."
    }
    Date={"12 Aug 2023"}
    Progress={24}
  />
);

export const Project = () => {
  return (
    <div
    // style={{ display: "flex", flex: "row", justifyContent: "space-evenly" }}
    >
      <ProfileCard
        banner={ashesibanner}
        profile={groupprofile}
        title={"Ghana Economic Index Study"}
        // content={[
        //   "Some quick example text to build on the card title and make up the bulk of the card's content.",
        //   "ssdsds",
        // ]}
        content={MyComponent}
      />

      <div>
        <img src={sidebanner} alt="" /> <div>My Icon</div>
      </div>
    </div>
  );
};
