import React from "react";
import Header from "../components/Header";
import Intrest from "../components/Intrest";
import Ecommerce from "../components/Ecommerce";
import Parkingsol from "../components/Parkingsol";
import Technology from "../components/Technology";
import About from "../components/About";
import Contactme from "../components/Contactme";
import Footer from "../components/Footer";
import Language from "../components/Language";

//import Title from "../components/Title";

const Home = () => {
  return (
    <div>
      <Header />
      <Intrest />
      <Ecommerce />
      <Parkingsol />
      <Language />
      <Technology />
      <About />
      <Contactme />
      <Footer />
    </div>
  );
};

export default Home;
