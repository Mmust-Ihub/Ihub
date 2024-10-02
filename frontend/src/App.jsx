import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PageHome from "./pages/HomeDefaultPage";
import AboutPage from "./pages/AboutPage";
import Programs from "./pages/ProgramsPage";
import Projects from "./pages/ProjectsPage";
import Membership from "./pages/MembershipPage";
import Donate from "./pages/DonatePage";
import CommunityAndEvents from "./pages/CommunityAndEvents";
import NotFoundPage from "./pages/NotFoundPage";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin"; 
import ForgotPassword from "./pages/admin/ForgotPassword";
import SignUp from "./pages/admin/SignUp";
import LoginForm from "./pages/admin/Login";
import FocusProjects from "./pages/FocusProjects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/communityandevents" element={<CommunityAndEvents />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/projects/:project" element={<FocusProjects />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}



export default App;
