// LoginForm.js
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link for navigation
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
import useAuthToken from "./AuthContext";

const LoginForm = () => {

  const notify = (message) => toast.success(message);
  const errorNotify = (message) => toast.error(message);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { updateAuthToken, getItem } = useAuthToken();
  const { token } = getItem();
  useEffect(() => {
    if (token) {
      window.location.href = "/admin/create-project";
    }
  }, []);
  
 
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (email && password) {
      try {
        setLoading(true);
        console.log("running login");
        const response = await fetch(
          `/${import.meta.env.VITE_BACKENED_URL}/auth/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          }
        );
        notify("Successfully logged in");

        if (!response.ok) {
          if (response.status === 401) {
            errorNotify("Invalid email or password");
            setError("Invalid email or password");
          }
          if (response.status === 500) {
            errorNotify("Server error. Try again later");
            setError("Server error. Try again later");
          }
          console.log(response); // You can customize the error message based on the response
        }

        const data = await response.json();
        console.log(data);

        if (data.status === "success") {
              localStorage.setItem("authToken", data?.accessToken);
          updateAuthToken(data?.accessToken); 
          navigate("/admin/create-project");
        }
      } catch (err) {
        setError(err.message); // Set the error message to be displayed
      } finally {
        setLoading(false);
      }
    } else {
      setError("Please enter both email and password"); // Updated error message
    }
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ToastContainer />
      {loading && <p>Loading...</p>}

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-96"
      >
        <h1 className="text-2xl font-bold text-primary mb-6 text-center">
          Welcome to mmust-Ihub Login
        </h1>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">
            Email address
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

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded hover:bg-tertiary transition duration-200"
        >
          Login
        </button>

        <div className="mt-4 text-center">
          <Link
            to="/forgot-password"
            className="text-secondary hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <div className="mt-2 text-center">
          <p className="text-gray-600">
            No account?{" "}
            <Link to="/signup" className="text-secondary hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
