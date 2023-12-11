import { ElementType, ReactNode } from "react";


const ProfileCard = ({
  banner,
  profile,
  title,
  content,
  action,
}) => {
  return (
    <div>
      {" "}
      <div /**Main body*/>
        <div
        //   style={{
        //     display: "flex",
        //     justifyContent: "center",
        //     width: "60vw",
        //   }}
        >
          {/* <div
            style={{
              transform: "translate(170px,80px)",
              zIndex: "2",
            }}
          >
            <img
              src={profile}
              alt={"alt"}
              className="card-img-top"
              style={{
                width: "140px", // Set a default size if not provided
                height: "140px",
                borderRadius: "50%", // Makes the image circular
                objectFit: "cover", // Ensures the image covers the entire container
                border: "3px solid white",
              }}
            />
          </div> */}
          <div className="card" style={{ width: "60vw", zIndex: "1" }}>
            <img src={banner} className="card-img-top" alt="..." />
            <div
              className="card-body"
              style={{ marginLeft: "20px", marginBottom: "30px" }}
            >
              <div
                className="card-title"
                style={{
                  marginTop: "40px",
                  fontSize: "27px",
                  fontWeight: "450",
                }}
              >
                {title}
              </div>
              <div className="card-text">{content}</div>
              {typeof action === "string" && (
                <a
                  href="#"
                  className="btn btn-primary"
                  style={{ marginBottom: "30px" }}
                >
                  {action}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default ProfileCard;