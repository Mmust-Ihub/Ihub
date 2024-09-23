import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageHome from "./pages/HomeDefaultPage";
import AboutPage from "./pages/AboutPage";
import Programs from "./pages/ProgramsPage";
import Projects from "./pages/ProjectsPage";
import Membership from "./pages/MembershipPage";
import Donate from "./pages/DonatePage";
import CommunityAndEvents from "./pages/CommunityAndEvents";
import NotFoundPage from "./pages/NotFoundPage";
import Contact from "./pages/Contact";
import AdminHome from "./pages/AdminHome";
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
        <Route path="/Home" element={<AdminHome />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
