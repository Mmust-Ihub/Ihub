import {  Routes, Route } from "react-router-dom";
import AdminHome from "./admin/AdminHome";
import ProjectPage from "./admin/AdminProjectPage";
import AdminLayout from "./admin/AdminLayout";
export default function Admin() {
    return (
      <AdminLayout>
        <Routes>
          <Route path="/Home" element={<AdminHome />} />
          <Route path="/admin/Create-Project" element={<ProjectPage />} />
        </Routes>
      </AdminLayout>
    );
}