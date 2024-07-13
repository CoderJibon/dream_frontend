import React, { useEffect } from "react";
import SectionBar from "../../../PageComponents/SectionBar/SectionBar.jsx";
import Banner from "../../../PageComponents/Banner/Banner.jsx";
import EarnSection from "../../../PageComponents/Earnsection/EarnSection.jsx";
const Home = () => {
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
