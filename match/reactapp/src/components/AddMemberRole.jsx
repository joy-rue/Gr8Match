import React, { useState } from "react";

const AddMemberRole = ({ handleAddMemberRole }) => {
  const [MemberRole, setMemberRole] = useState("");

  const handleMemberRoleChange = (e) => {
    setMemberRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddMemberRole(MemberRole);
    // You can handle form submission logic here
    console.log("Member Role:", MemberRole);
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
          placeholder="Member Role"
          value={MemberRole}
          onChange={handleMemberRoleChange}
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
          Add Member Role
        </button>
      </form>
    </div>
  );
};

export default AddMemberRole;
