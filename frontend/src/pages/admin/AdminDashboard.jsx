import React from 'react'
import { Navigate } from 'react-router-dom';

function AdminDashboard() {
  const { isAuthenticated } = useAuth();

  console.log(isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;

  }

  return (
    <div>AdminDashboard</div>
  )
}

export default AdminDashboard