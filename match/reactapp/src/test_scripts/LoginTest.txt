import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import Login from "./Login";

const App = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleFormSwitch = (formType) => {
    // Logic to switch between login and registration forms
    console.log("Switching to", formType);
  };

  return (
    <div>
      {showLoginForm ? (
        <Login onFormSwitch={handleFormSwitch} />
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
