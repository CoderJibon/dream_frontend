import React, { useEffect } from "react";
import Header from "../pages/user/Header/Header.jsx";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../pages/user/Footer/Footer.jsx";
import { useSelector } from "react-redux";

const userLayouts = () => {
  const { user } = useSelector((state) => state.auth);
  const isUser = user && user.role === "user";
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if user is not user
    if (!isUser) {
      navigate("/admin");
    }
    if (!user) {
      navigate("/login");
    }
  }, [isUser, navigate, user]);

  if (!isUser) {
    // Optional: You can render a loading state or message here
    return null;
  }

  return (
    <>
      {/* header area */}
      <Header />
      {/* header area end */}
      {/* body part area */}
      <Outlet />
      {/* body part area end */}
      {/* footer area */}
      <Footer />
      {/* footer area end */}
    </>
  );
};

export default userLayouts;
