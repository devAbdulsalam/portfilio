import React from "react";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Services from "./Services";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
import Footer from './Footer';
import Navbar from './Navbar';
import Bot from './Bot';

const Index = () => {
  return (
    <div>        
      <Navbar />
      <Bot />
      <Hero />
      <About />
      <Project />
      <Testimonials />
      <Skills />
      <Services/>
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
