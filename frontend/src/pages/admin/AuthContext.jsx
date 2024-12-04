import { useState } from "react";

const useAuthToken = () => {
  // Use state to store the authentication token
  const [authToken, setAuthToken] = useState(null);

  // Use useEffect to persist the token in local storage

  const getItem = () => {
    const token = localStorage.getItem("authToken");
    return { token, setAuthToken };
  };

  // Function to update the authentication token
  const updateAuthToken = (newToken) => {
    setAuthToken(newToken);

    // Store the token in local storage for persistence
    localStorage.setItem("authToken", newToken);
  };

  const clearAuthToken = () => {
    // Clear the token from the state
    setAuthToken(null);

    // Remove the token from local storage
    localStorage.removeItem("authToken");
  };

  // Return the token and functions to update and clear it
  return { updateAuthToken, clearAuthToken, getItem };
};

export default useAuthToken;
