import React, { useState } from "react";


const AddResponsibility = ({ handleAddResponsibility }) => {
  const [Responsibility, setResponsibility] = useState("");


  const handleResponsibilityChange = (e) => {
    setResponsibility(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log("Responsibility:", Responsibility);
    handleAddResponsibility(Responsibility);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "white",
          padding: "30px",
          marginTop: "10px",
          borderRadius: "10px",
        }}
      >
        <textarea
          value={Responsibility}
          placeholder="Responsibility - 50 words max"
          onChange={handleResponsibilityChange}
          required
          style={{
            borderRadius: "5px",
            borderBottom: "1px solid #7E7E7E",
            height: "100px",
            outline: "none", // Optional: Remove the input focus border
            width: "100%", // Optional: Make the input full-width
            marginBottom: "30px",
            padding: "5px", // Optional: Add some padding
          }}
        />
        <button
          type="submit"
          style={{
            cursor: "pointer",
            outline: "none",
            textDecoration: "none",
            border: "none",
            color: "white",
            backgroundColor: "#AD3537",
            padding: "8px",
          }}
        >
          Add Responsibility
        </button>
      </form>
    </div>
  );
};

export default AddResponsibility;
