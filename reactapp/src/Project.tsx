import React from "react";
import ashesibanner from "./assets/ashesibanner.png";
import groupprfile from "./components/icons/groupprofile.jpg";

export const Project = () => {
  return (
    <div style={{ display: "flex", flex: "row" }}>
      <div /*Main body*/>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              transform: "translate(170px,80px)",
              zIndex: "2",
            }}
          >
            <img
              src={groupprfile}
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
          </div>
          <div className="card" style={{ width: "60%", zIndex: "1" }}>
            <img src={ashesibanner} className="card-img-top" alt="..." />
            <div className="card-body" style={{ marginLeft: "20px" }}>
              <h5 className="card-title" style={{ marginTop: "40px" }}>
                Card title
              </h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                href="#"
                className="btn btn-primary"
                style={{ marginBottom: "30px" }}
              >
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
