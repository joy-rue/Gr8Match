import React from "react";
import closeIcon from "./icons/closeIcon.png";

const PopUpForm = ({ isOpen, PopUpForm, title, onClose }) => {
  const closePopUp = () => {
    onClose(); // Invoke the onClose function
  };

  return (
    <div>
      {/* Darkened background */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            overflow: "visible",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent dark background
            zIndex: 1000, // Ensure the darkened background is above other elements
          }}
        />
      )}

      {/* Pop-up form */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "#fff",
            padding: "20px",
            width: "50vw",
            borderRadius: "10px",
            display: "block",
            zIndex: 1001, // Ensure the pop-up is above the darkened background
            overflowY: "auto", // Make the content vertically scrollable
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginLeft: "30px",
            }}
          >
            <h2
              style={{
                maxWidth: "90%",
                marginRight: "10px",
              }}
            >
              {title}
            </h2>
            <img
              src={closeIcon}
              onClick={closePopUp}
              alt=""
              style={{
                width: "35px",
                height: "35px",
                marginRight: "30px",
                cursor: "pointer",
                overflow: "visible",
              }}
            />
          </div>
          {PopUpForm}
        </div>
      )}
    </div>
  );
};

export default PopUpForm;
