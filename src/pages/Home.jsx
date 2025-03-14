import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Servises from "../components/Servises";
import Offering from "../components/Offering";
import Team from "../components/Team";
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div className="w-full max-w-[1170px] mx-auto px-6">
      <Navbar />
      <Header/>
      <Servises/>
      <Offering/>
      <Projects/>
      <Team/>
      <Footer/>
    </div>
  );
};

export default Home;
