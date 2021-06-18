import React from "react";
import "../../styles.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";

function Home() {
   return (
      <>
         <HeroSection />
         <Cards />
         <Footer />
      </>
   );
}

export default Home;
