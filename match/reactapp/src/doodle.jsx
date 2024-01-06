import React, { useState } from "react";
// import HorizontalList from "./components/HorizontalList";
// import DateInput from "./components/DateInput";
// import AddEducation from "./components/AddEducation";
import AddApp from "./components/AddApp";

const PopUpForm = ({ isOpen, onClose, PopUpForm }) => {

  return (
    <div>
      {/* Darkened background */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
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
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
          display: isOpen ? "block" : "none",
          zIndex: 1001, // Ensure the pop-up is above the darkened background
        }}
      >
        <h2>Pop-up Form</h2>
        {PopUpForm}
      </div>
    </div>
  );
};

const ExampleComponent = () => {
  const [isPopUpOpen, setPopUpOpen] = useState(false);


  const PopForm = (
    <AddApp/>
  );

  const openPopUp = () => {
    setPopUpOpen(true);
  };

  const closePopUp = () => {
    setPopUpOpen(false);
  };

  return (
    <div>
      <h1>Example Component</h1>
      <button onClick={openPopUp}>Open Pop-up Form</button>

      {/* Render the pop-up form */}
      <PopUpForm
        isOpen={isPopUpOpen}
        onClose={closePopUp}
        PopUpForm={PopForm}
      />
    </div>
  );
};

export default ExampleComponent;



