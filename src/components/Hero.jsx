import React from "react";
import { motion } from "framer-motion";
import heroBg from "../assets/hero-1.png";

const Hero = () => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Colored angled overlay */}
      <div className="absolute inset-0  clip-diagonal"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-6 md:px-16 max-w-2xl">
        {/* Heading */}
        <motion.h1
          className="text-6xl md:text-4xl font-bold mb-6 leading-tight"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          EASY. FAST. RELIABLE.
        </motion.h1>

        {/* Divider */}
        <motion.div
          className="w-16 h-[2px] bg-white mb-6"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        ></motion.div>

        {/* Paragraph */}
        <motion.p
          className="text-sm md:text-lg mb-8 text-gray-100"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          Omnigas is dedicated to providing reliable, safe, and sustainable gas
          solutions to meet the diverse needs of our customers. Our commitment
          extends beyond mere provision to encompass a profound responsibility
          for safety and a focus on environmental stewardship. Through our
          mission, we aim to empower individuals and communities to thrive while
          contributing to a healthier, more sustainable planet.
        </motion.p>

        {/* Button */}
        <motion.a
          href="/about"
          className="inline-block border border-white text-white font-medium px-6 py-3 rounded-md hover:bg-white hover:text-[#03B5EC] transition"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          Read More
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
