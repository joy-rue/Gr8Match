import React, { useState } from "react";

const AddSkill = ({ handleAddSkill }) => {
  const [Skill, setSkill] = useState("");

  const handleSkillChange = (e) => {
    setSkill(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddSkill(Skill);
    // You can handle form submission logic here
    console.log("Skill:", Skill);
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
        <input
          type="text"
          placeholder="Skill"
          value={Skill}
          onChange={handleSkillChange}
          required
          style={{
            border: "none",
            borderBottom: "1px solid #7E7E7E",
            borderRadius: "5px",
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
          Add Skill
        </button>
      </form>
    </div>
  );
};

export default AddSkill;
