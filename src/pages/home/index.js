import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../../components/SideBar";
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import InfoSection from "../../components/infoSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../../components/infoSection/Data";
import Services from "../../components/Services";
import Footer from "../../components/Footer";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Helmet>
        <title>{'SSR Landing'}</title>
        <meta name="description" content={'Landing'} />
      </Helmet>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
}

export default Home;
