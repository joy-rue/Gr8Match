import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import Register from "./Register";

const App = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(true);

  const handleFormSwitch = (formType) => {
    // Logic to switch between Register and registration forms
    console.log("Switching to", formType);
  };

  return (
    <div>
      {showRegisterForm ? (
        <Register onFormSwitch={handleFormSwitch} />
      ) : (
        // Render other components or forms based on your application logic
        <div>
          <h1>Welcome to My App!</h1>
        </div>
      )}
    </div>
  );
};

export default App;
