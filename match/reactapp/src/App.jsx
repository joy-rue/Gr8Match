import React, { useState } from "react";
import Login from "./Login";
import { AuthProvider } from './AuthContext';

const App = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleFormSwitch = (formType) => {
    // Logic to switch between login and registration forms
    console.log("Switching to", formType);
  };

  return (
    <AuthProvider> {/* Add AuthProvider around the entire application */}
      <div>
        {showLoginForm ? (
          <Login onFormSwitch={handleFormSwitch} />
        ) : (
          <div>
            <h1>Welcome to My App!</h1>
          </div>
        )}
      </div>
    </AuthProvider>
  );
};

export default App;
