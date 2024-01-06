import React, { useState } from "react";
import HorizontalList from "./HorizontalList";
import DateInput from "./DateInput";
import closeIcon from "./icons/closeIcon.png";

const AddApp = () => {
  const [AppName, setAppName] = useState("");
  const [description, setDescription] = useState("");
  const [Link, setLink] = useState("");

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleAppNameChange = (e) => {
    setAppName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log("Project Name:", AppName);
    console.log("Description:", description);
    console.log("Link:", Link);
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
          placeholder="App Name - 10 words max"
          value={AppName}
          onChange={handleAppNameChange}
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
          placeholder="Link"
          value={Link}
          onChange={handleLinkChange}
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
          Add App
        </button>
      </form>
    </div>
  );
};

export default AddApp;
