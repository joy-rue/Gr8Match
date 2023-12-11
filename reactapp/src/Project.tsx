import ashesibanner from "./assets/ashesibanner.png";
import groupprofile from "./components/icons/groupprofile.jpg";
import sidebanner from "./components/icons/sidebanner.png";
import { ProfileCard } from "./components/ProfileCard";
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
        content={MyComponent}
      />

      <div>
        <img src={sidebanner} alt="" /> <div>My Icon</div>
      </div>
    </div>
  );
};
