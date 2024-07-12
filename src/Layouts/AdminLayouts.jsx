import React, { useEffect } from "react";
import AdminNav from "../pages/admin/AdminNav/AdminNav.jsx";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminLayouts = () => {
  const { user } = useSelector((state) => state.auth);
  const isAdmin = user && user.role === "admin";
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if user is not admin
    if (!isAdmin) {
      navigate("/");
    }
    if (!user) {
      navigate("/login");
    }
  }, [isAdmin, navigate, user]);

  if (!isAdmin) {
    // Optional: You can render a loading state or message here
    return null;
  }

  return (
    <div id="AdminBody">
      <AdminNav />
      <Outlet />
    </div>
  );
};

export default AdminLayouts;
