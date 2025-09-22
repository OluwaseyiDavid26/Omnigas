// src/components/Services.jsx
import React from "react";
import { motion } from "framer-motion";

import services1 from "../assets/sv1.png";
import services2 from "../assets/sv2.png";
import services3 from "../assets/sv3.png";
import services4 from "../assets/sv4.png";
import services5 from "../assets/sv5.png";
import services6 from "../assets/sv6.png";
import services7 from "../assets/sv7.png";
import services8 from "../assets/sv8.png";

const services = [
  {
    title: "Residential Gas Supply",
    img: services1,
    desc: "Omnigas provides dependable and efficient gas supply solutions for residential heating, cooking, and water heating needs, ensuring comfort and convenience for households.",
  },
  {
    title: "Commercial Gas Solution",
    img: services2,
    desc: "Our commercial gas services cater to businesses of all sizes, offering tailored solutions for heating, cooling, cooking, and various industrial applications, helping businesses operate smoothly and efficiently.",
  },
  {
    title: "Industrial Gas Supply",
    img: services3,
    desc: "Omnigas provides dependable and efficient gas supply solutions for residential heating, cooking, and water heating needs, ensuring comfort and convenience for households.",
  },
  {
    title: "Specialty Gases",
    img: services4,
    desc: "Omnigas provides dependable and efficient gas supply solutions for residential heating, cooking, and water heating needs, ensuring comfort and convenience for households.",
  },
  {
    title: "Safety Inspection & Training",
    img: services5,
    desc: "Omnigas provides dependable and efficient gas supply solutions for residential heating, cooking, and water heating needs, ensuring comfort and convenience for households",
  },
  {
    title: "Emergency Response Service",
    img: services6,
    desc: "Omnigas provides dependable and efficient gas supply solutions for residential heating, cooking, and water heating needs, ensuring comfort and convenience for households.",
  },
  {
    title: "Emergency Response Service",
    img: services7,
    desc: "Omnigas provides dependable and efficient gas supply solutions for residential heating, cooking, and water heating needs, ensuring comfort and convenience for households.",
  },
  {
    title: "Emergency Response Service",
    img: services8,
    desc: "Omnigas provides dependable and efficient gas supply solutions for residential heating, cooking, and water heating needs, ensuring comfort and convenience for households.",
  },
];

export default function Services() {
  return (
    <section className="relative bg-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-wide">
            Our Services
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Omnigas delivers safe, reliable, and sustainable energy solutions
            across industries and households.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="relative h-78 rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.img})` }}
              ></div>

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300"></div>

              {/* Content Overlay */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-6">
                <h3 className="text-xl font-semibold">{service.title}</h3>

                {/* Description on hover with animation */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-sm mt-3 rounded-lg p-3 opacity-0 group-hover:opacity-100"
                >
                  {service.desc}
                </motion.p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
