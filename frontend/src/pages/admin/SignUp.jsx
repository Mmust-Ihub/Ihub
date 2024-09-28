// SignUp.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const notify = (message) => toast.success(message);
  const errorNotify = (message) => toast.error(message);
  const navigate = useNavigate(); // Initialize useNavigate for navigation
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, set_confirm_password] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("User registered:", {
      username,
      email,
      password,
      confirm_password,
    });

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password, confirm_password }),
        }
      );

      console.log(response, "response");

      if (!response.ok) {
        errorNotify("An error occurred. Try again");
        console.log(response); // Log the error for debugging
        return;
      }

      const data = await response.json();
      console.log(data);

      if (data.token) {
        notify("Successfully registered");
        login(); // Handle login logic here if needed
      } else {
        notify("Successfully registered. Redirecting to login...");
        navigate("/login"); // Redirect to the login page
      }
    } catch (e) {
      errorNotify("Network error. Check your connection");
      console.log(e); // Log the error for debugging
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-96"
      >
        <h1 className="text-xl font-bold text-primary mb-6 text-center">
          Welcome to mmust-Ihub. Sign Up
        </h1>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-secondary"
            required
          />
        </div>

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

        <div className="mb-6">
          <label className="block text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-secondary"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="password">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm_password"
            value={confirm_password}
            onChange={(e) => set_confirm_password(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-secondary"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded hover:bg-tertiary transition duration-200"
        >
          Sign Up
        </button>
        <div className="mt-2 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-secondary hover:underline">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
