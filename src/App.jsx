import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import Benefits from "./components/Benefits";
import WhatDrivesUs from "./components/WhatDrivesUs";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <WhoWeAre />
              <Benefits />
              <WhatDrivesUs />
              <Services />
              <Testimonial />
              <ContactSection />
              <ScrollToTop />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
