// ForgotPassword.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically handle the password reset logic
    console.log("Password reset link sent to:", email);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-96"
      >
        <h1 className="text-2xl font-bold text-primary mb-6 text-center">
          Forgot Password
        </h1>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-secondary"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded hover:bg-tertiary transition duration-200"
        >
          Send Reset Link
        </button>
        <div className="mt-2 text-center">
        
            <Link to="/login" className="text-secondary hover:underline">
              Back to Login
            </Link>
          
          </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
