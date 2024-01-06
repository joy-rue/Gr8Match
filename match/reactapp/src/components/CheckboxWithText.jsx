import React, { useState } from "react";

const CheckboxWithText = ({ Text, handleIsChecked }) => {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
    handleIsChecked(); // Call handleIsChecked as a function
  };

  return (
    (
      <div>
        <input
          type="checkbox"
          id="myCheckbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />

        <label htmlFor="myCheckbox">{Text}</label>
      </div>
    )
  );
};

export default CheckboxWithText;
