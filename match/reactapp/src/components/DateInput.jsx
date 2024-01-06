import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({ placeholdertxt, handleDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (date) => {
    setSelectedDate(date);
    // Pass the selected date back to the parent component
    handleDateChange(date);
  };

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        placeholderText={placeholdertxt}
        dateFormat="MM/dd/yyyy"
        required
        customInput={
          <input
            style={{
              border: "none",
              borderRadius: "5px",
              borderBottom: "1px solid #7E7E7E",
              outline: "none",
              width: "150px",
              marginBottom: "10px",
              marginRight: "5%",
              padding: "5px",
            }}
          />
        }
      />
    </div>
  );
};

export default DateInput;
