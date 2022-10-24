import React from "react";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";
import Infos from "../components/Infos";

const Info = () => {
  return (
    <div>
      <Navbar />
      <HeroImage
        heading="Informacion"
        text="Mas informacion sobre nuestro trabajo:"
      />
      <Infos />
      <Footer />
    </div>
  );
};

export default Info;
