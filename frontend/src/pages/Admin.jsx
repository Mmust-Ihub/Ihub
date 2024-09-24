import { Routes, Route, useNavigate } from "react-router-dom";
import CreateProject from "./admin/CreateProject";
import AdminLayout from "./admin/AdminLayout";
import useAuthToken from "./admin/AuthContext";
import CreateEvents from "./admin/CreateEvents";
import { useEffect } from "react";
import NotFoundPage from "./NotFoundPage";
import CreateTestimonial from "./admin/CreateTestimonial";

export default function Admin() {
  const { updateAuthToken, getItem } = useAuthToken();
  const { token } = getItem();
  const navigate = useNavigate(); // Get the navigate function

  useEffect(() => {
    if (!token) {
      navigate("/login"); // Redirect to login page if no token
    }
  }, [token, navigate]); // Re-run the effect when token or navigate changes

  if (!token) {
    return null; // Prevent rendering until the redirect happens
  }

  return (
    <AdminLayout>
      <Routes>
        <Route path="/create-testimonial" element={<CreateTestimonial />} />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/create-event" element={<CreateEvents />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </AdminLayout>
  );
}
