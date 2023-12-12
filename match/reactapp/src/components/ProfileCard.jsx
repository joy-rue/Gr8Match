import { ElementType, ReactNode } from "react";

const ProfileCard = ({ banner, profile, content }) => {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ width: "60vw" }} className="card">
        <img src={banner} className="card-img-top" alt="Banner" />
        <div
          className="card-body"
          style={{ marginLeft: "20px", marginBottom: "30px" }}
        >
          {/* <div
            className="card-title"
            style={{ marginTop: "40px", fontSize: "27px", fontWeight: "450" }}
          >
            {title}
          </div> */}
          <div
            style={{
              position: "absolute",
              top: "80px",
              left: "170px",
              zIndex: "2",
            }}
          >
            {/* Profile Image */}

            {/* Content and Action */}
            <div className="card-text">{content}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
