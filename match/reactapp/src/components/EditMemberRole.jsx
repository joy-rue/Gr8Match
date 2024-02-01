import React, { useState } from "react";
import HorizontalList from "./HorizontalList";

const EditMemberRole = ({ handleEditMemberRole }) => {
  const [MemberRole, setMemberRole] = useState("");
  const [workhours, setWorkHours] = useState("");

  const handleMemberRoleChange = (e) => {
    setMemberRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditMemberRole(MemberRole, workhours);
    // You can handle form submission logic here
    console.log("Member Role:", MemberRole, "workhors", workhours);
  };

  const handleWorkHoursChange = (e) => {
    let inputValue = e.target.value;

    // Ensure the input is a non-negative integer within the desired range (1 to 40)
    if (/^\d*$/.test(inputValue) && inputValue >= 1 && inputValue <= 40) {
      setWorkHours(inputValue);
    } else if (
      inputValue === "" ||
      (inputValue.length === 1 && /^\d$/.test(inputValue))
    ) {
      // Allow the input to be empty or a single digit
      setWorkHours(inputValue);
    }
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
        <HorizontalList
          spacing={5}
          items={[
            <input
              type="text" // Using type text to allow better control over input validation
              id="integerInput"
              name="integerInput"
              value={workhours}
              placeholder="Work Hours"
              onChange={handleWorkHoursChange}
              style={{
                border: "none",
                borderBottom: "1px solid #7E7E7E",
                borderRadius: "5px",
                outline: "none", // Optional: Remove the input focus border
                width: "100px", // Optional: Make the input full-width
                marginBottom: "30px",
                padding: "5px", // Optional: Add some padding
              }}
            />,
            <div
              style={{
                color: "#0A66C2",
                fontWeight: "500",
                transform: "translateY(10px)",
              }}
            >
              hrs/wk
            </div>,
          ]}
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
          Edit Member Role
        </button>
      </form>
    </div>
  );
};

export default EditMemberRole;
