import React, { useState } from "react";
import HorizontalList from "./HorizontalList";
import DateInput from "./DateInput";
import closeIcon from "./icons/closeIcon.png";

const AddWorkExperience = () => {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [workhours, setWorkHours] = useState("");
  const [teamMember, setTeamMember] = useState([""]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    // Additional logic if needed
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    // Additional logic if needed
  };

  const handleTeamChange = (index, value) => {
    const newTeamMember = [...teamMember];
    newTeamMember[index] = value;
    setTeamMember(newTeamMember);
  };

    const addTeamMember = () => {
    setTeamMember([...teamMember, ""]); 
  };

  const removeTeamMember = (index) => {
    const newTeamMember = [...teamMember];
    newTeamMember.splice(index, 1);
    setTeamMember(newTeamMember);
  };

  const handleProjectNameChange = (e) => {
    setProjectName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log("Project Name:", projectName);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    console.log("Description:", description);
    console.log("Team:", teamMember);
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
          placeholder="Project Title - 10 words max"
          value={projectName}
          onChange={handleProjectNameChange}
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
          items={[
            <div style={{ marginRight: "50px" }}>
              <DateInput
                placeholdertxt="Start Date"
                handleDateChange={handleStartDateChange}
              />
            </div>,
            <div style={{ marginRight: "50px" }}>
              <DateInput
                placeholdertxt="End Date"
                handleDateChange={handleEndDateChange}
              />
            </div>,
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
            />,
          ]}
        />

        {teamMember.map((value, index) => (
          <div key={index}>
            <input
              type="text"
              value={value}
              placeholder={`Team Member ${index + 1}`}
              onChange={(e) => handleTeamChange(index, e.target.value)}
              style={{
                border: "none",
                borderRadius: "5px",
                borderBottom: "1px solid #7E7E7E",
                outline: "none",
                width: "50%",
                marginBottom: "10px",
                padding: "5px",
              }}
            />
            <button
              type="button"
              onClick={() => removeTeamMember(index)}
              style={{
                border: "none",
                outline: "none",
                padding: "0px",
                backgroundColor: "rgba(0,0,0,0)",
              }}
            >
              <img
                src={closeIcon}
                alt=""
                style={{
                  width: "20px",
                  marginLeft: "5px",
                  height: "20px",
                  transform: "translateY(7px)",
                }}
              />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addTeamMember}
          style={{
            cursor: "pointer",
            outline: "none",
            textDecoration: "none",
            border: "none",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          Add Member
        </button>

        <textarea
          value={description}
          placeholder="Description - 50 words max"
          onChange={handleDescriptionChange}
          required
          style={{
            borderRadius: "5px",
            borderBottom: "1px solid #7E7E7E",
            height: "100px",
            outline: "none", // Optional: Remove the input focus border
            width: "100%", // Optional: Make the input full-width
            marginTop: "30px",
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
          Add Work Experience
        </button>
      </form>
    </div>
  );
};

export default AddWorkExperience;
