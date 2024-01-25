import React, { createContext, useContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUserId = () => {
      if (authToken) {
        try {
          // Decode the token to get user information, including the user ID
          const decodedToken = jwt_decode(authToken);

          // Extract user ID from decoded token
          const user_id = decodedToken.user_id;

          // Set user ID state with the obtained user ID
          setUserId(user_id);
        } catch (error) {
          console.error('Error decoding token:', error);
        }
      }
    };

    fetchUserId();
  }, [authToken]);

  const setToken = (token) => {
    setAuthToken(token);
  };

  const logout = () => {
    setAuthToken(null);
    setUserId(null);
  };

  return (
    <AuthContext.Provider value={{ authToken, userId, setToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
