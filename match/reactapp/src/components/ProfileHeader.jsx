// import React from "react";
// import HorizontalList from "./HorizontalList";
// import banner from "./icons/campusbanner.png";
// import ProfileHeaderContent from "./ProfileheaderContent";
// import groupprofile from "./icons/groupprofile.jpg";
// import ProfileCard from "./ProfileCard";

// export const ProfileHeader = () => {
//   return (
//     <div>
//       <HorizontalList
//         items={[
//           //   <img src={banner} className="card-img-top" alt="Banner" />,
//           <ProfileCard
//             banner={banner}
//             profile={groupprofile}
//             title={"Ghana Economic Index Study"}
//             content={
//               <ProfileHeaderContent
//                 Department={"Computer Science"}
//                 workhours={40}
//                 Description={
//                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus eros eu vehicula interdum. "
//                 }
//                 contact={"+233206252066"}
//                 email={"joseph.dzagli@ashesi.edu.gh"}
//               />
//             }
//           />,
//         ]}
//       />
//     </div>
//   );
// };

import React from "react";
import ProgressBar from "./ProgressBar";
import VerticalList from "./VerticalList";
import HorizontalList from "./HorizontalList";

const ProfileHeader = ({
  Duration,
  TimeLeft,
  Description,
  Date,
  title,
  Progress,
  profile,
  banner,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: "60vw",
        marginTop: "-14.5%",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 1,
          flex: "1", // Take 1/3 of the available vertical space
        }}
      >
        <img
          src={banner}
          className="card-img-top"
          alt="Banner"
          style={{
            width: "100%",
            transform: "translateY(70%)",
          }}
        />
      </div>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          flex: "2", // Take 2/3 of the available vertical space
        }}
      >
        <VerticalList
        //   spacing={10}
          items={[
            <img
              src={profile}
              alt="Profile"
              className="card-img-top"
              style={{
                width: "15%",
                height: "20%",
                borderRadius: "60%",
                objectFit: "cover",
                border: "3px solid white",
                position: "relative",
                zIndex: 2,
              }}
            />,
            <div
              style={{
                marginLeft: "20px",
                fontSize: "27px",
                fontWeight: "450",
              }}
            >
              {title}
            </div>,
            <div
              style={{
                marginLeft: "20px",
              }}
            >
              {Description}
            </div>,
          ]}
        />
      </div>
    </div>
  );
};

export default ProfileHeader;
