import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import About from "../../components/About";
import KeyFeatures from "../../components/KeyFeatures";
import FAQAccordion from "../../components/FAQAccordian";
import EndingCTA from "../../components/EndingCTA"
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <KeyFeatures />
      <FAQAccordion />
      <EndingCTA />
      <Footer />
    </>
  );
}
