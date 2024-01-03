import React, { useState } from "react";
import DatePicker from "react-datepicker";

const DateInput = ({ placeholdertxt }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
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
