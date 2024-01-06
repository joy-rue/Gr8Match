import React from "react";

export const PopUpForm = () => {
  const [formData, setFormData] = useState({
    // Add your form fields here
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    // Close the pop-up after submission
    onClose();
  };
  return <div>PopUpForm</div>;
};
