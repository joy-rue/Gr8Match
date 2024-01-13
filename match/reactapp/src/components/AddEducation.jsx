import React, { useState } from "react";
import HorizontalList from "./HorizontalList";
import DateInput from "./DateInput";
import closeIcon from "./icons/closeIcon.png";

const AddEducation = ({handleAddEducation}) => {
  const [Institution, setInstitution] = useState("");
  const [Certification, setCertification] = useState("");
  const [dateAwarded, setdateAwarded] = useState(null);

  const handledateAwardedChange = (date) => {
    setdateAwarded(date);
    // Additional logic if needed
  };

  const handleInstitutionChange = (e) => {
    setInstitution(e.target.value);
  };

  const handleCertificationChange = (e) => {
    setCertification(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log("Institution Name:", Institution);
    console.log("Start Date:", dateAwarded);
    console.log("Certification:", Certification);
    handleAddEducation(Institution, dateAwarded, Certification);
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
          placeholder="Institution"
          value={Institution}
          onChange={handleInstitutionChange}
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

        <input
          type="text"
          placeholder="Certificate"
          value={Certification}
          onChange={handleCertificationChange}
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

        <div style={{ marginRight: "40px", marginBottom:"20px" }}>
          <DateInput
            placeholdertxt="Date Awarded"
            handleDateChange={handledateAwardedChange}
          />
        </div>

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
          Add Education
        </button>
      </form>
    </div>
  );
};

export default AddEducation;
