import React, { useState } from "react";
import DateInput from "./DateInput";

const AddTask = ({ handleAddTask }) => {
  const [Task, setTask] = useState("");
  const [DueDate, setDueDate] = useState(null);

  const handleDueDateChange = (date) => {
    setDueDate(date);
    // Additional logic if needed
  };

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log("Project Name:", Task);
    console.log("Start Date:", DueDate);
    handleAddTask(Task, DueDate);
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
          placeholder="Task"
          value={Task}
          onChange={handleTaskChange}
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

        <div style={{ marginRight: "40px", marginBottom: "20px" }}>
          <DateInput
            placeholdertxt="Due Date"
            handleDateChange={handleDueDateChange}
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
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
