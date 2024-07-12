import React, { useEffect } from "react";
import SectionBar from "../../../PageComponents/SectionBar/SectionBar.jsx";
import Banner from "../../../PageComponents/Banner/Banner.jsx";
import EarnSection from "../../../PageComponents/Earnsection/EarnSection.jsx";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../features/Auth/AuthApiSlice.js";
import toastify from "../../../utils/toastify.jsx";
import { setMessageEmpty } from "../../../features/Auth/AuthSlice.js";
const Home = () => {
  const dispatch = useDispatch();
  const { isError, message, user, isLoading } = useSelector(
    (state) => state.auth
  );

  // log out administrators
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  useEffect(() => {
    if (isError) {
      toastify("error", isError);
      dispatch(setMessageEmpty());
    }
    if (message) {
      //toastify("success", message);
      dispatch(setMessageEmpty());
    }
  }, [isError, message]);

  return (
    <>
      {/* section bar */}
      <SectionBar></SectionBar>
      {/* banner */}
      <Banner></Banner>
      {/* Earn section */}
      <EarnSection></EarnSection>
    </>
  );
};

export default Home;
