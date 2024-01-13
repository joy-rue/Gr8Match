import React, { useState } from "react";


const AddRequirement = ({ handleAddRequirement }) => {
  const [Requirement, setRequirement] = useState("");

  const handleRequirementChange = (e) => {
    setRequirement(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log("Requirement:", Requirement);
    handleAddRequirement(Requirement);
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
          value={Requirement}
          placeholder="Requirement - 50 words max"
          onChange={handleRequirementChange}
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
          Add Requirement
        </button>
      </form>
    </div>
  );
};

export default AddRequirement;
