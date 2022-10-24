import React from "react";
import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import Footer from "../components/Footer";
import AppsCard from "../components/AppsCard";

const Apps = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="Apps" text="Las aplicaciones que desarrollamos" />
      <AppsCard />
      <Footer />
    </div>
  );
};

export default Apps;
